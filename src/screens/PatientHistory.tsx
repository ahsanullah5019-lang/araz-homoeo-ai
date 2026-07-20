import React from 'react';
import { theme } from '../utils/theme';
import { useAppStore } from '../store/useAppStore';

interface PatientHistoryProps {
  onEditCase: (caseData: any) => void;
  onGoToRepertory: (symptomsSummary: string) => void;
  onBack: () => void;
}

export const PatientHistory: React.FC<PatientHistoryProps> = ({
  onEditCase,
  onGoToRepertory,
  onBack
}) => {
  // useAppStore থেকে safe destructuring
  const store = useAppStore() as any;
  const selectedPatient = store.selectedPatient;
  const casesList = store.cases || store.patientCases || [];

  // সিলেক্ট করা রোগীর সকল কেস ফিল্টার করা
  const patientCases = Array.isArray(casesList)
    ? casesList.filter((c: any) => c.patientId === selectedPatient?.id)
    : [];

  return (
    <div style={{
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: theme.fonts.regular,
      boxSizing: 'border-box'
    }}>
      {/* হেডার */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: theme.colors.primary, cursor: 'pointer', fontSize: '15px', marginBottom: '5px', padding: 0 }}>
            ➔ ফিরে যান
          </button>
          <h2 style={{ color: theme.colors.textPrimary, margin: 0, fontFamily: theme.fonts.bold }}>
            রোগীর পূর্ববর্তী কেস ইতিহাস: <span style={{ color: theme.colors.primary }}>{selectedPatient?.name || 'রোগী নির্বাচন করুন'}</span>
          </h2>
        </div>
      </div>

      {patientCases.length === 0 ? (
        <div style={{ backgroundColor: theme.colors.surface, padding: '40px', borderRadius: '12px', textAlign: 'center', boxShadow: theme.shadows.card }}>
          <p style={{ color: theme.colors.textSecondary, margin: 0 }}>এই রোগীর পূর্বে সংরক্ষণ করা কোনো কেস হিস্ট্রি পাওয়া যায়নি।</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {patientCases.map((caseItem: any, index: number) => (
            <div key={caseItem.id || index} style={{
              backgroundColor: theme.colors.surface,
              padding: '20px',
              borderRadius: '12px',
              boxShadow: theme.shadows.card,
              borderLeft: `5px solid ${theme.colors.primary}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                  তারিখ: {caseItem.createdAt ? new Date(caseItem.createdAt).toLocaleDateString('bn-BD') : 'তারিখ পাওয়া যায়নি'}
                </span>
                <span style={{ fontSize: '12px', color: theme.colors.textSecondary }}>
                  আইডি: {caseItem.id || `CASE-${index + 1}`}
                </span>
              </div>

              {/* লক্ষণের বিবরণ */}
              <div style={{ backgroundColor: theme.colors.background, padding: '12px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px', color: theme.colors.textPrimary }}>
                <strong>সংগৃহীত লক্ষণসমূহ:</strong>
                <p style={{ margin: '5px 0 0 0', lineHeight: '1.5' }}>{caseItem.symptomsSummary || 'কোনো লক্ষণ বিস্তারিত পাওয়া যায়নি'}</p>
              </div>

              {/* অ্যাকশন বাটনসমূহ */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onEditCase(caseItem)}
                  style={{
                    backgroundColor: theme.colors.secondary,
                    color: '#fff',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontFamily: theme.fonts.bold
                  }}
                >
                  ✏️ লক্ষণ সংশোধন / নতুন লক্ষণ যোগ করুন
                </button>

                <button
                  onClick={() => onGoToRepertory(caseItem.symptomsSummary)}
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: '#fff',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontFamily: theme.fonts.bold
                  }}
                >
                  📊 এই কেস থেকে রেপার্টরাইজেশন করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};