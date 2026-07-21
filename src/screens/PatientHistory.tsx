import React, { useState } from 'react';
import { theme } from '../utils/theme';
import { useAppStore } from '../store/useAppStore';

export interface CaseRecord {
  id?: string;
  patientId: string;
  patientName: string;
  chiefComplaints?: string;
  modalities?: string;
  mentalSymptoms?: string;
  physicalGenerals?: string;
  foodDesires?: string;
  sleepDream?: string;
  selectedRubrics?: string[]; // সিলেক্ট করা রুব্রিকের আইডি
  imageUrl?: string | null;   // আপলোড করা ছবির লিংক বা Base64
  symptomsSummary?: string;
  createdAt?: string | Date;
}

interface PatientHistoryProps {
  onEditCase: (caseData: CaseRecord) => void;
  onGoToRepertory: (symptomsSummary: string, selectedRubrics?: string[]) => void;
  onBack: () => void;
}

export const PatientHistory: React.FC<PatientHistoryProps> = ({
  onEditCase,
  onGoToRepertory,
  onBack
}) => {
  // useAppStore থেকে টাইপ-সেফ ডেটা নেওয়া
  const store = useAppStore() as any;
  const selectedPatient = store.selectedPatient;
  const casesList: CaseRecord[] = store.cases || store.patientCases || [];

  // কেস আইটেম বিস্তারিত দেখার জন্য স্টেট
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  // সিলেক্ট করা রোগীর সকল কেস ফিল্টার করা
  const patientCases = Array.isArray(casesList)
    ? casesList.filter((c: CaseRecord) => c.patientId === selectedPatient?.id)
    : [];

  const toggleExpand = (id: string) => {
    setExpandedCaseId(prev => (prev === id ? null : id));
  };

  const formatDate = (dateInput?: string | Date) => {
    if (!dateInput) return 'তারিখ পাওয়া যায়নি';
    try {
      const date = new Date(dateInput);
      return isNaN(date.getTime()) ? 'তারিখ পাওয়া যায়নি' : date.toLocaleDateString('bn-BD');
    } catch {
      return 'তারিখ পাওয়া যায়নি';
    }
  };

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
      {/* হেডার */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: theme.colors.primary,
              cursor: 'pointer',
              fontSize: '14px',
              marginBottom: '5px',
              padding: 0,
              fontWeight: 'bold'
            }}
          >
            ← ফিরে যান
          </button>
          <h2 style={{ color: theme.colors.textPrimary, margin: 0, fontFamily: theme.fonts.bold, fontSize: '20px' }}>
            📜 রোগীর কেস ইতিহাস: <span style={{ color: theme.colors.primary }}>{selectedPatient?.name || 'রোগী নির্বাচন করুন'}</span>
          </h2>
        </div>
      </div>

      {patientCases.length === 0 ? (
        <div
          style={{
            backgroundColor: theme.colors.surface,
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: theme.shadows.card
          }}
        >
          <p style={{ color: theme.colors.textSecondary, margin: 0, fontSize: '15px' }}>
            এই রোগীর পূর্বে সংরক্ষণ করা কোনো কেস হিস্ট্রি পাওয়া যায়নি।
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {patientCases.map((caseItem: CaseRecord, index: number) => {
            const caseId = caseItem.id || `CASE-${index + 1}`;
            const isExpanded = expandedCaseId === caseId;

            return (
              <div
                key={caseId}
                style={{
                  backgroundColor: theme.colors.surface,
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: theme.shadows.card,
                  borderLeft: `5px solid ${theme.colors.primary}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                    📅 তারিখ: {formatDate(caseItem.createdAt)}
                  </span>
                  <span style={{ fontSize: '12px', color: theme.colors.textSecondary, backgroundColor: '#f0f0f0', padding: '3px 8px', borderRadius: '4px' }}>
                    আইডি: {caseId}
                  </span>
                </div>

                {/* লক্ষণের সংক্ষিপ্ত সামারি */}
                <div style={{ backgroundColor: theme.colors.background, padding: '12px', borderRadius: '8px', marginBottom: '15px', fontSize: '14px', color: theme.colors.textPrimary }}>
                  <strong>সংগৃহীত লক্ষণসামারি:</strong>
                  <p style={{ margin: '5px 0 0 0', lineHeight: '1.5' }}>
                    {caseItem.symptomsSummary || 'কোনো লক্ষণ বিস্তারিত পাওয়া যায়নি'}
                  </p>
                </div>

                {/* ড্রপডাউন/অ্যাকর্ডিয়ন মোডে বিস্তারিত কন্টেন্ট */}
                {isExpanded && (
                  <div style={{ backgroundColor: '#f9f9f9', padding: '12px', borderRadius: '8px', marginBottom: '15px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {caseItem.chiefComplaints && <div><strong>প্রধান রোগ:</strong> {caseItem.chiefComplaints}</div>}
                    {caseItem.modalities && <div><strong>হ্রাস-বৃদ্ধি:</strong> {caseItem.modalities}</div>}
                    {caseItem.mentalSymptoms && <div><strong>মানসিক লক্ষণ:</strong> {caseItem.mentalSymptoms}</div>}
                    {caseItem.physicalGenerals && <div><strong>শারীরিক সাধারণ:</strong> {caseItem.physicalGenerals}</div>}
                    {caseItem.foodDesires && <div><strong>খাদ্য ও তৃষ্ণা:</strong> {caseItem.foodDesires}</div>}
                    {caseItem.sleepDream && <div><strong>ঘুম ও স্বপ্ন:</strong> {caseItem.sleepDream}</div>}
                    
                    {/* নির্বাচিত রুব্রিক সংখ্যা */}
                    {caseItem.selectedRubrics && caseItem.selectedRubrics.length > 0 && (
                      <div><strong>সংযুক্ত রুব্রিক্স:</strong> {caseItem.selectedRubrics.length} টি রুব্রিক নির্বাচন করা আছে</div>
                    )}

                    {/* রোগীর ছবির প্রিভিউ (যদি থাকে) */}
                    {caseItem.imageUrl && (
                      <div style={{ marginTop: '5px' }}>
                        <strong>সংযুক্ত ছবি:</strong>
                        <div style={{ marginTop: '5px' }}>
                          <img 
                            src={caseItem.imageUrl} 
                            alt="Patient Symptom" 
                            style={{ maxHeight: '120px', borderRadius: '6px', border: `1px solid ${theme.colors.border}` }} 
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* অ্যাকশন বাটনসমূহ */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button
                    onClick={() => toggleExpand(caseId)}
                    style={{
                      backgroundColor: 'transparent',
                      color: theme.colors.textSecondary,
                      border: `1px solid ${theme.colors.border}`,
                      padding: '8px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontFamily: theme.fonts.bold
                    }}
                  >
                    {isExpanded ? '▲ কম দেখুন' : '▼ বিস্তারিত দেখুন'}
                  </button>

                  <button
                    onClick={() => onEditCase(caseItem)}
                    style={{
                      backgroundColor: theme.colors.secondary,
                      color: '#fff',
                      border: 'none',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontFamily: theme.fonts.bold
                    }}
                  >
                    ✏️ লক্ষণ সংশোধন করুন
                  </button>

                  <button
                    onClick={() => onGoToRepertory(caseItem.symptomsSummary || '', caseItem.selectedRubrics)}
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: '#fff',
                      border: 'none',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontFamily: theme.fonts.bold
                    }}
                  >
                    📊 রেপার্টরাইজেশন করুন ➔
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};