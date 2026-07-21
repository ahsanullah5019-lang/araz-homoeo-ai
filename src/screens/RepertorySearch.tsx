import React, { useState, useEffect } from 'react';
import { theme } from '../utils/theme';
import { REPERTORY_DATABASE, Rubric, Chapter } from '../data/repertoryData';

interface SelectedRubricItem {
  id: string;
  nameEn: string;
  nameBn: string;
  remedies: { remedyId: string; grade: number }[];
}

interface RepertorySearchProps {
  patientName?: string;
  initialSymptoms?: string;
  initialRubrics?: string[]; // CaseTaking থেকে পাঠানো রুব্রিক আইডিগুলোর লিস্ট
  onSelectRemedyForPrescription?: (remedyName: string) => void;
}

export const RepertorySearch: React.FC<RepertorySearchProps> = ({
  patientName,
  initialSymptoms,
  initialRubrics = [],
  onSelectRemedyForPrescription
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [selectedRubrics, setSelectedRubrics] = useState<SelectedRubricItem[]>([]);

  // ১. আসল REPERTORY_DATABASE থেকে সকল চ্যাপ্টারের রুব্রিক ফ্ল্যাট লিস্টে আনা
  const getAllRubrics = (): { rubric: Rubric; chapterName: string }[] => {
    let list: { rubric: Rubric; chapterName: string }[] = [];

    REPERTORY_DATABASE.forEach((chapter: Chapter) => {
      if (selectedChapterId === 'all' || chapter.id === selectedChapterId) {
        chapter.rubrics.forEach((rubric: Rubric) => {
          list.push({
            rubric,
            chapterName: chapter.nameBn
          });
        });
      }
    });

    return list;
  };

  // ২. CaseTaking থেকে প্রপস হিসেবে আসা initialRubrics অটো সিলেক্ট করা
  useEffect(() => {
    if (initialRubrics && initialRubrics.length > 0) {
      const initialSelectedList: SelectedRubricItem[] = [];

      REPERTORY_DATABASE.forEach((chapter: Chapter) => {
        chapter.rubrics.forEach((rubric: Rubric) => {
          if (initialRubrics.includes(rubric.id)) {
            // ডুপ্লিকেট এড়াতে চেক
            if (!initialSelectedList.some(item => item.id === rubric.id)) {
              initialSelectedList.push({
                id: rubric.id,
                nameEn: rubric.nameEn,
                nameBn: rubric.nameBn,
                remedies: rubric.remedies
              });
            }
          }
        });
      });

      setSelectedRubrics(initialSelectedList);
    }
  }, [initialRubrics]);

  const allRubricsList = getAllRubrics();

  const filteredRubrics = allRubricsList.filter(({ rubric }) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      term === '' ||
      rubric.nameEn.toLowerCase().includes(term) ||
      rubric.nameBn.toLowerCase().includes(term);

    const isNotSelected = !selectedRubrics.some(sel => sel.id === rubric.id);
    return matchesSearch && isNotSelected;
  });

  // ৩. রুব্রিক সিলেক্ট ও রিমুভ ফাংশন
  const handleSelectRubric = (rubric: Rubric) => {
    setSelectedRubrics(prev => [
      ...prev,
      {
        id: rubric.id,
        nameEn: rubric.nameEn,
        nameBn: rubric.nameBn,
        remedies: rubric.remedies
      }
    ]);
    setSearchTerm('');
  };

  const handleRemoveRubric = (id: string) => {
    setSelectedRubrics(prev => prev.filter(rubric => rubric.id !== id));
  };

  // ৪. ক্লাসিক্যাল রেপার্টরাইজেশন লজিক (লক্ষণ ম্যাচিং + গ্রেড পয়েন্ট স্কোরিং)
  const calculateRemedyRanking = () => {
    const ranking: Record<string, { totalPoints: number; matchCount: number }> = {};

    selectedRubrics.forEach(rubric => {
      rubric.remedies.forEach(r => {
        if (!ranking[r.remedyId]) {
          ranking[r.remedyId] = { totalPoints: 0, matchCount: 0 };
        }
        ranking[r.remedyId].totalPoints += r.grade;
        ranking[r.remedyId].matchCount += 1;
      });
    });

    // প্রথমে বেশি লক্ষণ ম্যাচিং, তারপর বেশি স্কোরের ওপর ভিত্তি করে সর্টিং
    return Object.entries(ranking).sort((a, b) => {
      if (b[1].matchCount !== a[1].matchCount) {
        return b[1].matchCount - a[1].matchCount;
      }
      return b[1].totalPoints - a[1].totalPoints;
    });
  };

  const rankedRemedies = calculateRemedyRanking();

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        minHeight: '100vh',
        padding: '20px',
        fontFamily: theme.fonts.regular,
        boxSizing: 'border-box'
      }}
    >
      <h2 style={{ color: theme.colors.textPrimary, marginTop: 0, fontFamily: theme.fonts.bold }}>
        📊 AI রেপার্টরি ও রেপার্টরাইজেশন শিট {patientName ? `(${patientName})` : ''}
      </h2>
      <p style={{ color: theme.colors.textSecondary, marginTop: '-8px', marginBottom: '20px' }}>
        বাংলা বা ইংরেজিতে রুব্রিক সার্চ করুন এবং সঠিক রেমিডি র‍্যাঙ্কিং তৈরি করুন
      </p>

      {initialSymptoms && (
        <div
          style={{
            backgroundColor: '#e3f2fd',
            padding: '12px 15px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#0d47a1',
            borderLeft: '4px solid #1976d2'
          }}
        >
          <strong>রোগীর কেস নোট:</strong> {initialSymptoms}
        </div>
      )}

      {/* চ্যাপ্টার ফিল্টার ফিল্ড */}
      <div style={{ marginBottom: '15px', display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
        <button
          onClick={() => setSelectedChapterId('all')}
          style={{
            padding: '6px 14px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: selectedChapterId === 'all' ? theme.colors.primary : '#e0e0e0',
            color: selectedChapterId === 'all' ? '#fff' : '#333',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap'
          }}
        >
          🌐 সকল চ্যাপ্টার
        </button>
        {REPERTORY_DATABASE.map(chap => (
          <button
            key={chap.id}
            onClick={() => setSelectedChapterId(chap.id)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: selectedChapterId === chap.id ? theme.colors.primary : '#e0e0e0',
              color: selectedChapterId === chap.id ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap'
            }}
          >
            {chap.icon} {chap.nameBn}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* বাম পাশ: রুব্রিক্স সার্চ ও সিলেকশন */}
        <div style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* সার্চ বক্স কার্ড */}
          <div style={{ backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '12px', boxShadow: theme.shadows.card }}>
            <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold }}>
              🔍 লক্ষণ / Rubric অনুসন্ধান
            </label>
            <input
              type="text"
              placeholder="লক্ষণ লিখুন (যেমন: Anxiety, মাথা ব্যথা, একজিমা)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: `1px solid ${theme.colors.border}`,
                outline: 'none',
                boxSizing: 'border-box',
                fontSize: '14px'
              }}
            />

            {/* সার্চ রেজাল্ট ড্রপডাউন */}
            <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: '8px', marginTop: '10px', maxHeight: '220px', overflowY: 'auto', backgroundColor: '#fff' }}>
              {filteredRubrics.length === 0 ? (
                <p style={{ padding: '12px', color: theme.colors.textSecondary, margin: 0, fontSize: '14px' }}>
                  কোনো Rubric পাওয়া যায়নি
                </p>
              ) : (
                filteredRubrics.slice(0, 30).map(({ rubric, chapterName }) => (
                  <div
                    key={rubric.id}
                    onClick={() => handleSelectRubric(rubric)}
                    style={{
                      padding: '10px 12px',
                      borderBottom: `1px solid ${theme.colors.border}`,
                      cursor: 'pointer',
                      fontSize: '14px',
                      display: 'flex',
                     justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 'bold', color: theme.colors.textPrimary }}>{rubric.nameEn}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{rubric.nameBn}</div>
                    </div>
                    <span style={{ fontSize: '11px', backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', color: '#555' }}>
                      {chapterName}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* নির্বাচিত লক্ষণের তালিকা */}
          <div style={{ backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '12px', boxShadow: theme.shadows.card, flex: 1 }}>
            <h4 style={{ marginTop: 0, marginBottom: '15px', fontFamily: theme.fonts.bold }}>
              📌 বাছাইকৃত লক্ষণসমূহ ({selectedRubrics.length})
            </h4>
            {selectedRubrics.length === 0 ? (
              <p style={{ color: theme.colors.textSecondary, fontSize: '14px' }}>এখনো কোনো লক্ষণ সিলেক্ট করা হয়নি।</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedRubrics.map(rubric => (
                  <div
                    key={rubric.id}
                    style={{
                      display: 'flex',
                     justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px',
                      backgroundColor: theme.colors.background,
                      borderRadius: '6px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 'bold', color: theme.colors.textPrimary }}>{rubric.nameEn}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{rubric.nameBn}</div>
                    </div>
                    <button
                      onClick={() => handleRemoveRubric(rubric.id)}
                      style={{
                        border: 'none',
                        background: 'none',
                        color: theme.colors.error,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ডান পাশ: রেপার্টরাইজেশন শিট ও ওষুধ র‍্যাংকিং টেবিল */}
        <div style={{ flex: 1.2, minWidth: '350px', backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '12px', boxShadow: theme.shadows.card }}>
          <h4 style={{ marginTop: 0, marginBottom: '15px', fontFamily: theme.fonts.bold }}>
            🩺 Remedy Ranking Matrix (রেপার্টরাইজেশন ফলাফল)
          </h4>

          {selectedRubrics.length === 0 ? (
            <p style={{ color: theme.colors.textSecondary, fontSize: '14px', textAlign: 'center', padding: '40px 0' }}>
              লক্ষণ নির্বাচন করলে ওষুধের তালিকা, ম্যাচিং সংখ্যা এবং গ্রেড স্বয়ংক্রিয়ভাবে তৈরি হবে।
            </p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${theme.colors.border}` }}>
                    <th style={{ padding: '10px 5px', fontFamily: theme.fonts.bold, fontSize: '14px' }}>ওষুধের নাম</th>
                    <th style={{ padding: '10px 5px', fontFamily: theme.fonts.bold, fontSize: '14px' }}>লক্ষণ ম্যাচ</th>
                    <th style={{ padding: '10px 5px', fontFamily: theme.fonts.bold, fontSize: '14px' }}>মোট স্কোর</th>
                    <th style={{ padding: '10px 5px', fontFamily: theme.fonts.bold, fontSize: '14px' }}>অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  {rankedRemedies.map(([remedy, stat]) => (
                    <tr key={remedy} style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                      <td style={{ padding: '12px 5px', color: theme.colors.primary, fontFamily: theme.fonts.bold, fontSize: '14px' }}>
                        {remedy}
                      </td>
                      <td style={{ padding: '12px 5px' }}>
                        <span
                          style={{
                            backgroundColor: '#e3f2fd',
                            color: theme.colors.primary,
                            padding: '3px 8px',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}
                        >
                          {stat.matchCount} / {selectedRubrics.length}
                        </span>
                      </td>
                      <td style={{ padding: '12px 5px', fontWeight: 'bold', color: theme.colors.secondary, fontSize: '14px' }}>
                        {stat.totalPoints}
                      </td>
                      <td style={{ padding: '12px 5px' }}>
                        {onSelectRemedyForPrescription && (
                          <button
                            onClick={() => onSelectRemedyForPrescription(remedy)}
                            style={{
                              backgroundColor: theme.colors.primary,
                              color: '#fff',
                              border: 'none',
                              padding: '6px 12px',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '12px',
                              fontFamily: theme.fonts.bold
                            }}
                          >
                            প্রেসক্রিপশন ➔
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};