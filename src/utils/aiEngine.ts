import { MATERIA_MEDICA_DATABASE, RemedyInfo } from '../data/materiaMedicaData';
import { REPERTORY_DATABASE, RepertoryRemedyScore } from '../data/repertoryData';

export interface RemedyMatchResult {
  remedyId: string;
  remedyName: string;
  commonName: string;
  matchScore: number; // শতাংশে (0 - 100%)
  matchedRubricsCount: number;
  totalRubricsEvaluated: number;
  keynoteMatches: string[];
  materiaMedicaSummary: string;
  remedyDetails: RemedyInfo;
}

export interface CaseAnalysisInput {
  symptomsSummary: string;
  selectedRubricIds?: string[];
  organConditionIds?: string[];
}

/**
 * AI Case Repertorization & Analysis Engine
 * রোগীর লক্ষণমালা ও নির্বাচিত রুব্রিক বিশ্লেষণ করে সঠিক ওষুধ র‍্যাঙ্ক তৈরি করে
 */
export const analyzeCaseWithAI = (input: CaseAnalysisInput): RemedyMatchResult[] => {
  const remedyScores: Record<string, { totalGrade: number; matchedCount: number; keynotes: string[] }> = {};
  const queryText = (input.symptomsSummary || '').toLowerCase();
  
  // ১. রেপার্টরি রুব্রিক এনালাইসিস (গাণিতিক গ্রেড পয়েন্ট গণনাকরণ)
  const evaluatedRubricIds = new Set<string>(input.selectedRubricIds || []);

  REPERTORY_DATABASE.forEach(chapter => {
    chapter.rubrics.forEach(rubric => {
      // যদি রুব্রিকটি ম্যানুয়ালি বাছাই করা হয় অথবা রোগীর কেস নোটে মিলে যায়
      const isRubricMentioned = Array.from(evaluatedRubricIds).includes(rubric.id) || 
                                queryText.includes(rubric.nameEn.toLowerCase()) || 
                                queryText.includes(rubric.nameBn);

      if (isRubricMentioned) {
        rubric.remedies.forEach((r: RepertoryRemedyScore) => {
          if (!remedyScores[r.remedyId]) {
            remedyScores[r.remedyId] = { totalGrade: 0, matchedCount: 0, keynotes: [] };
          }
          remedyScores[r.remedyId].totalGrade += r.grade; // Grade 1, 2, or 3
          remedyScores[r.remedyId].matchedCount += 1;
        });
      }
    });
  });

  // ২. মেটেরিয়া মেডিকা ও কি-নোট সেমান্টিক ম্যাচিং
  Object.keys(MATERIA_MEDICA_DATABASE).forEach(remedyKey => {
    const remedy = MATERIA_MEDICA_DATABASE[remedyKey];
    if (!remedyScores[remedyKey]) {
      remedyScores[remedyKey] = { totalGrade: 0, matchedCount: 0, keynotes: [] };
    }

    // কি-নোট ম্যাচিং
    remedy.keynotes.forEach(keynote => {
      const keywords = keynote.toLowerCase().split(' ');
      const matchFound = keywords.some(kw => kw.length > 3 && queryText.includes(kw));
      if (matchFound) {
        remedyScores[remedyKey].totalGrade += 2.5; // কি-নোট মেলা মানে বাড়তি পয়েন্ট
        remedyScores[remedyKey].keynotes.push(keynote);
      }
    });

    // মোডালিটি (বৃদ্ধি ও উপশম) স্ক্যানিং
    remedy.aggravation.forEach(agg => {
      if (queryText.includes(agg.toLowerCase())) {
        remedyScores[remedyKey].totalGrade += 2;
      }
    });

    remedy.amelioration.forEach(amel => {
      if (queryText.includes(amel.toLowerCase())) {
        remedyScores[remedyKey].totalGrade += 2;
      }
    });
  });

  // ৩. শতাংশ হিসাব এবং সর্বোচ্চ পয়েন্টের ভিত্তিতে সর্টিং (Ranking)
  const results: RemedyMatchResult[] = [];
  const totalEvaluated = Math.max(evaluatedRubricIds.size, 1);

  Object.keys(remedyScores).forEach(remedyId => {
    const scoreData = remedyScores[remedyId];
    const remedyObj = MATERIA_MEDICA_DATABASE[remedyId];

    if (scoreData.totalGrade > 0 && remedyObj) {
      // শতাংশ ক্যালকুলেশন (সর্বোচ্চ ১৫ পয়েন্টের স্কেলে নরম্যালাইজড)
      const calculatedPercentage = Math.min(Math.round((scoreData.totalGrade / 12) * 100), 99);

      results.push({
        remedyId,
        remedyName: remedyObj.name,
        commonName: remedyObj.commonName,
        matchScore: calculatedPercentage,
        matchedRubricsCount: scoreData.matchedCount,
        totalRubricsEvaluated: totalEvaluated,
        keynoteMatches: Array.from(new Set(scoreData.keynotes)),
        materiaMedicaSummary: remedyObj.summary,
        remedyDetails: remedyObj
      });
    }
  });

  // সর্বোচ্চ স্কোরধারী ওষুধগুলো সবার উপরে থাকবে
  return results.sort((a, b) => b.matchScore - a.matchScore);
};