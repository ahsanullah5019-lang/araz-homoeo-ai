import React from 'react';
import { theme } from '../utils/theme';

export interface RemedyItem {
  remedyName: string;
  potency: string;
  dosage: string;
  instructions: string;
}

export interface PrescriptionDataPreview {
  remedy?: string;
  potency?: string;
  dosage?: string;
  instructions?: string;
  remedies?: RemedyItem[];
  dietAdvice: string;
  date: string;
}

interface PrescriptionPreviewProps {
  patientInfo: { name: string; age: number | string; gender: string };
  prescriptionData: PrescriptionDataPreview;
  onBack: () => void;
  onPrintShare?: () => void;
}

export const PrescriptionPreview: React.FC<PrescriptionPreviewProps> = ({
  patientInfo,
  prescriptionData,
  onBack,
  onPrintShare
}) => {
  // ব্যাকওয়ার্ড কম্প্যাটিবিলিটি (সিঙ্গেল বা মাল্টিপল যেকোনো অবজেক্ট সাপোর্ট করবে)
  const remediesList: RemedyItem[] = prescriptionData.remedies || [
    {
      remedyName: prescriptionData.remedy || '',
      potency: prescriptionData.potency || '',
      dosage: prescriptionData.dosage || '',
      instructions: prescriptionData.instructions || ''
    }
  ];

  const handleNativePrint = () => {
    if (onPrintShare) {
      onPrintShare();
    } else {
      window.print();
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
      {/* প্রিন্ট টাইমে লুকিয়ে রাখার জন্য নো-প্রিন্ট স্টাইল */}
      <style>{`
        @media print {
          body {
            background-color: #fff !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .printable-pad {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      {/* কন্ট্রোল বাটন (প্রিন্টে দৃশ্যমান হবে না) */}
      <div
        className="no-print"
        style={{
          display: 'flex',
          justifyContent: 'space-between', // ✅ 'justify' থেকে সংশোধন করা হয়েছে
          alignItems: 'center',
          marginBottom: '20px',
          maxWidth: '750px',
          margin: '0 auto 20px auto'
        }}
      >
        <button
          onClick={onBack}
          style={{
            border: 'none',
            background: 'none',
            color: theme.colors.primary,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          ⬅ সংশোধন করুন
        </button>
        <button
          onClick={handleNativePrint}
          style={{
            backgroundColor: theme.colors.primary,
            color: '#fff',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '8px',
            fontFamily: theme.fonts.bold,
            cursor: 'pointer',
            fontSize: '14px',
            boxShadow: theme.shadows.button
          }}
        >
          🖨️ প্রিন্ট / PDF সংরক্ষণ করুন
        </button>
      </div>

      {/* ডিজিটাল প্রেসক্রিপশন প্যাড */}
      <div
        className="printable-pad"
        style={{
          backgroundColor: '#fff',
          padding: '40px 35px',
          borderRadius: '8px',
          boxShadow: theme.shadows.card,
          maxWidth: '750px',
          margin: '0 auto',
          border: '1px solid #ddd',
          minHeight: '850px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // ✅ 'justify' থেকে সংশোধন করা হয়েছে
          boxSizing: 'border-box'
        }}
      >
        {/* প্যাড হেডার */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between', // ✅ 'justify' থেকে সংশোধন করা হয়েছে
              alignItems: 'flex-start',
              borderBottom: `3px solid ${theme.colors.primary}`,
              paddingBottom: '15px'
            }}
          >
            <div>
              <h2 style={{ margin: 0, color: theme.colors.primary, fontFamily: theme.fonts.bold, fontSize: '24px' }}>
                ARAZ AI Homeeo Clinic
              </h2>
              <span style={{ fontSize: '13px', color: theme.colors.textSecondary }}>
                ডিজিটাল হোমিতোপ্যাথি চিকিৎসা ও গবেষণা কেন্দ্র
              </span>
            </div>
            <div style={{ textAlign: 'right', fontSize: '13px', color: theme.colors.textSecondary }}>
              <span><strong>তারিখ:</strong> {prescriptionData.date}</span>
            </div>
          </div>

          {/* রোগীর তথ্য বার */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between', // ✅ 'justify' থেকে সংশোধন করা হয়েছে
              backgroundColor: '#f8f9fa',
              padding: '10px 15px',
              marginTop: '15px',
              borderRadius: '6px',
              fontSize: '14px',
              border: `1px solid ${theme.colors.border}`
            }}
          >
            <span><strong>রোগীর নাম:</strong> {patientInfo.name}</span>
            <span><strong>বয়স:</strong> {patientInfo.age}</span>
            <span><strong>লিঙ্গ:</strong> {patientInfo.gender}</span>
          </div>

          {/* প্রেসক্রিপশন বডি */}
          <div style={{ display: 'flex', marginTop: '25px', minHeight: '450px' }}>
            {/* বাম পাশ: নোট বা নির্দেশাবলী */}
            <div
              style={{
                flex: 1,
                borderRight: `1px solid ${theme.colors.border}`,
                paddingRight: '15px'
              }}
            >
              <h5 style={{ margin: '0 0 10px 0', color: theme.colors.textPrimary, fontFamily: theme.fonts.bold }}>
                লক্ষণসংক্ষেপ:
              </h5>
              <p style={{ fontSize: '13px', color: theme.colors.textSecondary, margin: 0, lineHeight: '1.5' }}>
                রোগীর সার্বদৈহিক ও মানসিক লক্ষণাবলী পর্যবেক্ষণ সাপেক্ষে ঔষধ নির্বাচিত।
              </p>
            </div>

            {/* ডান পাশ: মূল ওষুধসমূহ (Rx) */}
            <div style={{ flex: 2.2, paddingLeft: '20px' }}>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                  display: 'block',
                  marginBottom: '15px',
                  fontFamily: 'serif'
                }}
              >
                Rx.
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {remediesList.map((item, idx) => (
                  <div key={idx} style={{ borderBottom: remediesList.length > 1 ? '1px dashed #eee' : 'none', paddingBottom: '10px' }}>
                    <div style={{ fontSize: '17px', color: theme.colors.textPrimary, fontFamily: theme.fonts.bold }}>
                      {idx + 1}. {item.remedyName} <span style={{ color: theme.colors.error, marginLeft: '6px' }}>{item.potency}</span>
                    </div>

                    {item.dosage && (
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: theme.colors.textSecondary }}>
                        📌 মাত্রা: {item.dosage}
                      </p>
                    )}

                    {item.instructions && (
                      <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: theme.colors.secondary, fontStyle: 'italic' }}>
                        💡 নিয়ম: {item.instructions}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* প্যাড ফুটার (পথ্য ও স্বাক্ষর) */}
        <div
          style={{
            borderTop: `1px solid ${theme.colors.border}`,
            paddingTop: '15px',
            display: 'flex',
            justifyContent: 'space-between', // ✅ 'justify' থেকে সংশোধন করা হয়েছে
            alignItems: 'flex-end'
          }}
        >
          <div style={{ maxWidth: '65%' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: theme.colors.accent }}>
              ⚠️ বিশেষ পথ্য ও উপদেশ:
            </span>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: theme.colors.textSecondary, lineHeight: '1.4' }}>
              {prescriptionData.dietAdvice}
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '130px', borderBottom: '1px dashed #777', marginBottom: '6px' }}></div>
            <span style={{ fontSize: '12px', color: theme.colors.textSecondary, fontWeight: 'bold' }}>
              চিকিৎসকের স্বাক্ষর
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};