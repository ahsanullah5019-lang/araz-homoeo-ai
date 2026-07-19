import React from 'react';
import { theme } from '../utils/theme';

interface PrescriptionPreviewProps {
  patientInfo: { name: string; age: number; gender: string };
  prescriptionData: { remedy: string; potency: string; dosage: string; instructions: string; dietAdvice: string; date: string };
  onBack: () => void;
  onPrintShare: () => void;
}

export const PrescriptionPreview: React.FC<PrescriptionPreviewProps> = ({
  patientInfo,
  prescriptionData,
  onBack,
  onPrintShare
}) => {
  return (
    <div style={{
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: theme.fonts.regular
    }}>
      {/* কন্ট্রোল বাটন */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', maxWidth: '700px', margin: '0 auto 20px auto' }}>
        <button onClick={onBack} style={{ border: 'none', background: 'none', color: theme.colors.primary, cursor: 'pointer', fontWeight: 'bold' }}>
          ⬅ এডিট করুন
        </button>
        <button onClick={onPrintShare} style={{ backgroundColor: theme.colors.primary, color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontFamily: theme.fonts.bold, cursor: 'pointer', boxShadow: theme.shadows.button }}>
          🖨 প্রিন্ট / WhatsApp এ পাঠান
        </button>
      </div>

      {/* ডিজিটাল প্রেসক্রিপশন প্যাড */}
      <div style={{
        backgroundColor: '#fff',
        padding: '40px 30px',
        borderRadius: '8px',
        boxShadow: theme.shadows.card,
        maxWidth: '700px',
        margin: '0 auto',
        border: '1px solid #ddd',
        minHeight: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* প্যাড হেডার */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `3px solid ${theme.colors.primary}`, paddingBottom: '15px' }}>
            <div>
              <h2 style={{ margin: 0, color: theme.colors.primary, fontFamily: theme.fonts.bold }}>ARAZ AI Homeeo Clinic</h2>
              <span style={{ fontSize: '13px', color: theme.colors.textSecondary }}>হোমিওপ্যাথি চিকিৎসা ও গবেষণা কেন্দ্র</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: '13px', color: theme.colors.textSecondary }}>
              <span>তারিখ: {prescriptionData.date}</span>
            </div>
          </div>

          {/* রোগীর তথ্য বার */}
          <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: theme.colors.background, padding: '10px', marginTop: '15px', borderRadius: '6px', fontSize: '14px' }}>
            <span><strong>রোগীর নাম:</strong> {patientInfo.name}</span>
            <span><strong>বয়স:</strong> {patientInfo.age}</span>
            <span><strong>লিঙ্গ:</strong> {patientInfo.gender}</span>
          </div>

          {/* প্রেসক্রিপশন বডি */}
          <div style={{ display: 'flex', marginTop: '30px', minHeight: '400px' }}>
            {/* বাম পাশ: লক্ষণ ও নির্দেশনাবলী */}
            <div style={{ flex: 1, borderRight: `1px solid ${theme.colors.border}`, paddingRight: '15px' }}>
              <h5 style={{ margin: '0 0 10px 0', color: theme.colors.textPrimary, fontFamily: theme.fonts.bold }}>প্রধান লক্ষণসমূহ:</h5>
              <p style={{ fontSize: '14px', color: theme.colors.textSecondary, margin: 0 }}>কেস রেকর্ড অনুযায়ী ঔষধ নির্ধারিত হয়েছে।</p>
            </div>

            {/* ডান পাশ: মূল ওষুধ (Rx) */}
            <div style={{ flex: 2, paddingLeft: '20px' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: theme.colors.primary, display: 'block', marginBottom: '15px' }}>Rx.</span>
              <div style={{ marginBottom: '25px' }}>
                <span style={{ fontSize: '18px', color: theme.colors.textPrimary, fontFamily: theme.fonts.bold }}>
                  {prescriptionData.remedy} <span style={{ color: theme.colors.error }}>{prescriptionData.potency}</span>
                </span>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: theme.colors.textSecondary }}>
                  {prescriptionData.dosage}
                </p>
                <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: theme.colors.secondary, fontStyle: 'italic' }}>
                  💡 {prescriptionData.instructions}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* প্যাড ফুটার (পথ্য ও স্বাক্ষর) */}
        <div style={{ borderTop: `1px solid ${theme.colors.border}`, paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ maxWidth: '70%' }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: theme.colors.accent }}>⚠️ বিশেষ পথ্য ও উপদেশ:</span>
            <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: theme.colors.textSecondary }}>{prescriptionData.dietAdvice}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '120px', borderBottom: '1px dashed #999', marginBottom: '5px' }}></div>
            <span style={{ fontSize: '12px', color: theme.colors.textSecondary }}>চিকিৎসকের স্বাক্ষর</span>
          </div>
        </div>
      </div>
    </div>
  );
};