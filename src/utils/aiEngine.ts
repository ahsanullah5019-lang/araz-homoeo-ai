import { MATERIA_MEDICA_DATABASE, RemedyInfo } from '../data/materiaMedicaData';
import { REPERTORY_DATABASE, RepertoryRemedyScore } from '../data/repertoryData';
import { ANATOMY_DATABASE } from '../data/anatomyData';

export interface RemedyMatchResult {
  remedyId: string;
  remedyName: string;
  commonName: string;
  matchScore: number; // শতাংশে (0 - 100%)
  matchedRubricsCount: number;
  totalRubricsEvaluated: number;
  keynoteMatches: string[];
  materiaMedicaSummary: string;
  differentiatingFeatures: string[];
  remedyDetails: RemedyInfo;
}

export interface CaseAnalysisInput {
  symptomsSummary: string;
  selectedRubricIds?: string[];
  organConditionIds?: string[];
  miasmFilter?: string;
  causation?: string;
  imageUrl?: string;
  bodyRegion?: string;
}

/**
 * Advanced Classical Homeopathic AI Engine (Error-Free Version)
 */
export const analyzeCaseWithAI = (input: CaseAnalysisInput): RemedyMatchResult[] => {
  const remedyScores: Record<
    string,
    {
      totalGrade: number;
      matchedCount: number;
      keynotes: string[];
      diffFeatures: string[];
    }
  > = {};

  // const-এর বদলে let ব্যবহার করা হয়েছে যেন প্রয়োজন অনুযায়ী আপডেট করা যায়
  let queryText = (input.symptomsSummary || '').toLowerCase();
  const causationText = (input.causation || '').toLowerCase();
  const regionText = (input.bodyRegion || '').toLowerCase();
  const evaluatedRubricIds = new Set<string>(input.selectedRubricIds || []);

  // ১. রেপার্টরি রুব্রিক এনালাইসিস
  REPERTORY_DATABASE.forEach(chapter => {
    chapter.rubrics.forEach(rubric => {
      const isRubricMentioned =
        Array.from(evaluatedRubricIds).includes(rubric.id) ||
        queryText.includes(rubric.nameEn.toLowerCase()) ||
        queryText.includes(rubric.nameBn);

      if (isRubricMentioned) {
        rubric.remedies.forEach((r: RepertoryRemedyScore) => {
          if (!remedyScores[r.remedyId]) {
            remedyScores[r.remedyId] = {
              totalGrade: 0,
              matchedCount: 0,
              keynotes: [],
              diffFeatures: []
            };
          }
          remedyScores[r.remedyId].totalGrade += r.grade;
          remedyScores[r.remedyId].matchedCount += 1;
        });
      }
    });
  });

  // ২. অ্যানাটমি ও প্যাথলজি কন্ডিশন অ্যানালাইসিস (Type Safe Check সহ)
  if (input.organConditionIds && input.organConditionIds.length > 0) {
    ANATOMY_DATABASE.forEach(system => {
      system.conditions.forEach(cond => {
        if (input.organConditionIds?.includes(cond.id)) {
          // repertoryRubrics নিরাপদে চেক করা হচ্ছে
          if (cond.repertoryRubrics && Array.isArray(cond.repertoryRubrics)) {
            cond.repertoryRubrics.forEach((rubricName: string) => {
              queryText += ` ${rubricName.toLowerCase()}`;
            });
          }
        }
      });
    });
  }

  // ৩. মেটেরিয়া মেডিকাস স্ক্যানিং (Type Safe Dynamic Property Access)
  Object.keys(MATERIA_MEDICA_DATABASE).forEach(remedyKey => {
    // any কাস্ট করা হয়েছে যেন টাইপ না থাকলেও TS Error না দেয়
    const remedy = MATERIA_MEDICA_DATABASE[remedyKey] as any;

    if (!remedyScores[remedyKey]) {
      remedyScores[remedyKey] = {
        totalGrade: 0,
        matchedCount: 0,
        keynotes: [],
        diffFeatures: []
      };
    }

    // A. কি-নোট ম্যাচিং
    if (remedy.keynotes && Array.isArray(remedy.keynotes)) {
      remedy.keynotes.forEach((keynote: string) => {
        const keywords = keynote.toLowerCase().split(' ');
        const matchFound = keywords.some(kw => kw.length > 3 && queryText.includes(kw));

        if (matchFound) {
          remedyScores[remedyKey].totalGrade += 3.0;
          remedyScores[remedyKey].keynotes.push(keynote);
        }
      });
    }

    // B. কজেশন (Causation) ম্যাচিং
    if (causationText && remedy.causation && Array.isArray(remedy.causation)) {
      const causeMatched = remedy.causation.some((c: string) =>
        causationText.includes(c.toLowerCase())
      );
      if (causeMatched) {
        remedyScores[remedyKey].totalGrade += 3.5;
        remedyScores[remedyKey].diffFeatures.push(`Causation: ${input.causation}`);
      }
    }

    // C. লোকালিটি (Body Region) ম্যাচিং
    if (regionText && remedy.sphereOfAction && Array.isArray(remedy.sphereOfAction)) {
      const regionMatched = remedy.sphereOfAction.some((s: string) =>
        s.toLowerCase().includes(regionText)
      );
      if (regionMatched) {
        remedyScores[remedyKey].totalGrade += 2.0;
      }
    }

    // D. মোডালিটি (বৃদ্ধি ও উপশম) স্ক্যানিং
    if (remedy.aggravation && Array.isArray(remedy.aggravation)) {
      remedy.aggravation.forEach((agg: string) => {
        if (queryText.includes(agg.toLowerCase())) {
          remedyScores[remedyKey].totalGrade += 2.5;
          remedyScores[remedyKey].diffFeatures.push(`Aggravation: ${agg}`);
        }
      });
    }

    if (remedy.amelioration && Array.isArray(remedy.amelioration)) {
      remedy.amelioration.forEach((amel: string) => {
        if (queryText.includes(amel.toLowerCase())) {
          remedyScores[remedyKey].totalGrade += 2.5;
          remedyScores[remedyKey].diffFeatures.push(`Amelioration: ${amel}`);
        }
      });
    }

    // E. মায়াজম (Miasm) ফিল্টারিং
    if (input.miasmFilter && remedy.miasm) {
      if (typeof remedy.miasm === 'string' && remedy.miasm.toLowerCase() === input.miasmFilter.toLowerCase()) {
        remedyScores[remedyKey].totalGrade += 2.0;
      }
    }
  });

  // ৪. সর্টিং এবং একিউরেট ম্যাচ পার্সেন্টেজ ক্যালকুলেশন
  const results: RemedyMatchResult[] = [];
  const totalEvaluated = Math.max(evaluatedRubricIds.size, 1);

  Object.keys(remedyScores).forEach(remedyId => {
    const scoreData = remedyScores[remedyId];
    const remedyObj = MATERIA_MEDICA_DATABASE[remedyId];

    if (scoreData.totalGrade > 0 && remedyObj) {
      const calculatedPercentage = Math.min(
        Math.round((scoreData.totalGrade / 16) * 100),
        99
      );

      if (calculatedPercentage >= 20) {
        results.push({
          remedyId,
          remedyName: remedyObj.name,
          commonName: remedyObj.commonName,
          matchScore: calculatedPercentage,
          matchedRubricsCount: scoreData.matchedCount,
          totalRubricsEvaluated: totalEvaluated,
          keynoteMatches: Array.from(new Set(scoreData.keynotes)),
          materiaMedicaSummary: remedyObj.summary,
          differentiatingFeatures: Array.from(new Set(scoreData.diffFeatures)),
          remedyDetails: remedyObj
        });
      }
    }
  });

  return results.sort((a, b) => b.matchScore - a.matchScore);
};