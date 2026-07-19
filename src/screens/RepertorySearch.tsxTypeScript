import React, { useState } from 'react';
import { theme } from '../utils/theme';

// ডামি রেপার্টরি ডাটাবেস (অফলাইন মোডের জন্য)
const mockRubrics = [
  { id: 'r1', name: 'Headache, cold applications relieves', remedies: { 'Ars': 3, 'Sil': 2, 'Puls': 1 } },
  { id: 'r2', name: 'Mind, anger, irascibility', remedies: { 'Nux-v': 3, 'Cham': 3, 'Bry': 2, 'Hep': 2 } },
  { id: 'r3', name: 'Thirst, large quantities, infrequent', remedies: { 'Bry': 3, 'Ars': 1 } },
  { id: 'r4', name: 'Generalities, warmth, warm room aggravates', remedies: { 'Puls': 3, 'Apis': 3, 'lod': 2 } },
];

interface SelectedRubric {
  id: string;
  name: string;
  remedies: Record<string, number>;
}

export const RepertorySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRubrics, setSelectedRubrics] = useState<SelectedRubric[]>([]);

  // রুব্রিক্স ফিল্টার বা সার্চ লজিক
  const filteredRubrics = mockRubrics.filter(rubric =>
    rubric.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedRubrics.some(sel => sel.id === rubric.id)
  );

  // রুব্রিক্স সিলেক্ট করার ফাংশন
  const handleSelectRubric = (rubric: SelectedRubric) => {
    setSelectedRubrics([...selectedRubrics, rubric]);
    setSearchTerm('');
  };

  // রুব্রিক্স রিমুভ করার ফাংশন
  const handleRemoveRubric = (id: string) => {
    setSelectedRubrics(selectedRubrics.filter(rubric => rubric.id !== id));
  };

  // রেপার্টরাইজেশন লজিক: ওষুধের টোটাল পয়েন্ট এবং লক্ষণ ম্যাচিং সংখ্যা হিসাব করা
  const calculateRemedyRanking = () => {
    const ranking: Record<string, { totalPoints: number; matchCount: number }> = {};

    selectedRubrics.forEach(rubric => {
      Object.entries(rubric.remedies).forEach(([remedy, points]) => {
        if (!ranking[remedy]) {
          ranking[remedy] = { totalPoints: 0, matchCount: 0 };
        }
        ranking[remedy].totalPoints += points;
        ranking[remedy].matchCount += 1;
      });
    });

    // বেশি লক্ষণ ম্যাচিং এবং বেশি পয়েন্টের ওপর ভিত্তি করে সর্ট (Sort) করা
    return Object.entries(ranking).sort((a, b) => {
      if (b[1].matchCount !== a[1].matchCount) {
        return b[1].matchCount - a[1].matchCount;
      }
      return b[1].totalPoints - a[1].totalPoints;
    });
  };

  const rankedRemedies = calculateRemedyRanking();

  return (
    <div style={{
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: theme.fonts.regular
    }}>
      <h2 style={{ color: theme.colors.textPrimary, marginTop: 0, fontFamily: theme.fonts.bold }}>
        AI রেপার্টরি ও রেপার্টরাইজেশন শিট
      </h2>
      <p style={{ color: theme.colors.textSecondary, marginTop: '-10px', marginBottom: '20px' }}>
        লক্ষণ সার্চ করুন এবং সঠিক সম্ভাব্য ওষুধ নির্বাচন করুন
      </p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* বাম পাশ: রুব্রিক্স সার্চ ও সিলেকশন */}
        <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* সার্চ বক্স */}
          <div style={{ backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '12px', boxShadow: theme.shadows.card }}>
            <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold }}>লক্ষণ / Rubric অনুসন্ধান</label>
            <input
              type="text"
              placeholder="লক্ষণ টাইপ করুন (যেমন: Headache, Anger)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, outline: 'none' }}
            />

            {/* সার্চ রেজাল্ট ড্রপডাউন */}
            {searchTerm && (
              <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: '8px', marginTop: '5px', maxHeight: '200px', overflowY: 'auto', backgroundColor: '#fff' }}>
                {filteredRubrics.length === 0 ? (
                  <p style={{ padding: '10px', color: theme.colors.textSecondary, margin: 0 }}>কোনো Rubric পাওয়া যায়নি</p>
                ) : (
                  filteredRubrics.map(rubric => (
                    <div
                      key={rubric.id}
                      onClick={() => handleSelectRubric(rubric)}
                      style={{ padding: '12px', borderBottom: `1px solid ${theme.colors.border}`, cursor: 'pointer', backgroundColor: '#fff' }}
                    >
                      {rubric.name}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* নির্বাচিত লক্ষণের তালিকা */}
          <div style={{ backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '12px', boxShadow: theme.shadows.card, flex: 1 }}>
            <h4 style={{ marginTop: 0, marginBottom: '15px', fontFamily: theme.fonts.bold }}>বাছাইকৃত লক্ষণসমূহ ({selectedRubrics.length})</h4>
            {selectedRubrics.length === 0 ? (
              <p style={{ color: theme.colors.textSecondary, fontSize: '14px' }}>এখনো কোনো লক্ষণ সিলেক্ট করা হয়নি।</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedRubrics.map(rubric => (
                  <div key={rubric.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: theme.colors.background, borderRadius: '6px' }}>
                    <span style={{ fontSize: '14px' }}>{rubric.name}</span>
                    <button
                      onClick={() => handleRemoveRubric(rubric.id)}
                      style={{ border: 'none', background: 'none', color: theme.colors.error, cursor: 'pointer', fontWeight: 'bold' }}
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
            Remedy Ranking Matrix (রেপার্টরাইজেশন ফলাফল)
          </h4>

          {selectedRubrics.length === 0 ? (
            <p style={{ color: theme.colors.textSecondary, fontSize: '14px', textAlign: 'center', padding: '40px 0' }}>
              লক্ষণ নির্বাচন করলে ওষুধের তালিকা এবং গ্রেড এখানে স্বয়ংক্রিয়ভাবে তৈরি হবে।
            </p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${theme.colors.border}`, paddingBottom: '8px' }}>
                  <th style={{ padding: '10px 5px', fontFamily: theme.fonts.bold }}>ওষুধের নাম</th>
                  <th style={{ padding: '10px 5px', fontFamily: theme.fonts.bold }}>লক্ষণ ম্যাচ (Symptom Match)</th>
                  <th style={{ padding: '10px 5px', fontFamily: theme.fonts.bold }}>মোট স্কোর (Total Weight)</th>
                </tr>
              </thead>
              <tbody>
                {rankedRemedies.map(([remedy, stat]) => (
                  <tr key={remedy} style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                    <td style={{ padding: '12px 5px', color: theme.colors.primary, fontFamily: theme.fonts.bold }}>
                      {remedy}
                    </td>
                    <td style={{ padding: '12px 5px' }}>
                      <span style={{ backgroundColor: theme.colors.primaryLight, color: theme.colors.primary, padding: '3px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
                        {stat.matchCount} / {selectedRubrics.length}
                      </span>
                    </td>
                    <td style={{ padding: '12px 5px', fontWeight: 'bold', color: theme.colors.secondary }}>
                      {stat.totalPoints}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};