import React, { useState } from 'react';
import { theme } from '../utils/theme';

interface CaseTakingProps {
  patientId: string;
  patientName: string;
  onSave: (caseData: any) => void;
  onBack: () => void;
}

export const CaseTaking: React.FC<CaseTakingProps> = ({ patientId, patientName, onSave, onBack }) => {
  const [activeTab, setActiveTab] = useState<'chief' | 'mental' | 'physical'>('chief');
  const [caseState, setCaseState] = useState({
    chiefComplaints: '',
    modalities: '',
    mentalSymptoms: '',
    physicalGenerals: '',
    foodDesires: '',
    sleepDream: ''
  });

  const handleSave = () => {
    // সংগৃহীত সব লক্ষণ একত্র করে একটি কম্বাইন্ড টেক্সট তৈরি
    const fullSymptomText = [
      caseState.chiefComplaints,
      caseState.modalities,
      caseState.mentalSymptoms,
      caseState.physicalGenerals,
      caseState.foodDesires,
      caseState.sleepDream
    ].filter(Boolean).join('. ');

    const caseData = {
      patientId,
      patientName,
      ...caseState,
      symptomsSummary: fullSymptomText,
      createdAt: new Date()
    };

    onSave(caseData);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: `1px solid ${theme.colors.border}`,
    outline: 'none',
    fontSize: '14px',
    boxSizing: 'border-box'
  };

  return (
    <div style={{
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      padding: '15px',
      fontFamily: theme.fonts.regular,
      boxSizing: 'border-box'
    }}>
      {/* হেডার */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: theme.colors.primary, cursor: 'pointer', fontSize: '15px', marginBottom: '5px', padding: 0 }}>
            ➔ ফিরে যান
          </button>
          <h2 style={{ color: theme.colors.textPrimary, margin: 0, fontFamily: theme.fonts.bold, fontSize: '20px' }}>
            কেস টেকিং: <span style={{ color: theme.colors.primary }}>{patientName}</span>
          </h2>
        </div>
        <button onClick={handleSave} style={{ backgroundColor: theme.colors.secondary, color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '8px', fontFamily: theme.fonts.bold, cursor: 'pointer', fontSize: '14px' }}>
          কেস সংরক্ষণ করুন
        </button>
      </div>

      {/* ট্যাব নেভিগেশন (মোবাইল ফ্রেন্ডলি রেসপন্সিভ) */}
      <div style={{ 
        display: 'flex', 
        borderBottom: `2px solid ${theme.colors.border}`, 
        marginBottom: '15px', 
        backgroundColor: theme.colors.surface, 
        borderRadius: '8px 8px 0 0',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        <button 
          onClick={() => setActiveTab('chief')}
          style={{ flex: 1, minWidth: '130px', padding: '12px 10px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: theme.fonts.bold, fontSize: '13px', color: activeTab === 'chief' ? theme.colors.primary : theme.colors.textSecondary, borderBottom: activeTab === 'chief' ? `3px solid ${theme.colors.primary}` : 'none' }}
        >
          ১. প্রধান লক্ষণ ও বৃদ্ধি
        </button>
        <button 
          onClick={() => setActiveTab('mental')}
          style={{ flex: 1, minWidth: '130px', padding: '12px 10px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: theme.fonts.bold, fontSize: '13px', color: activeTab === 'mental' ? theme.colors.primary : theme.colors.textSecondary, borderBottom: activeTab === 'mental' ? `3px solid ${theme.colors.primary}` : 'none' }}
        >
          ২. মানসিক লক্ষণ
        </button>
        <button 
          onClick={() => setActiveTab('physical')}
          style={{ flex: 1, minWidth: '130px', padding: '12px 10px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: theme.fonts.bold, fontSize: '13px', color: activeTab === 'physical' ? theme.colors.primary : theme.colors.textSecondary, borderBottom: activeTab === 'physical' ? `3px solid ${theme.colors.primary}` : 'none' }}
        >
          ৩. শারীরিক সাধারণ
        </button>
      </div>

      {/* ট্যাব কন্টেন্ট */}
      <div style={{ backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '0 0 12px 12px', boxShadow: theme.shadows.card, minHeight: '300px' }}>
        {activeTab === 'chief' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>প্রধান রোগের বিবরণ (Chief Complaints)</label>
              <textarea 
                value={caseState.chiefComplaints}
                onChange={(e) => setCaseState({ ...caseState, chiefComplaints: e.target.value })}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="রোগীর মূল কষ্ট ও লক্ষণগুলো লিখুন (যেমন: জ্বর, মাথা ব্যথা, পেটে জ্বালা)..."
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>হ্রাস-বৃদ্ধি (Modalities - Better / Worse)</label>
              <textarea 
                value={caseState.modalities}
                onChange={(e) => setCaseState({ ...caseState, modalities: e.target.value })}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="কিসে বাড়ে বা কিসে কমে? (যেমন: ঠান্ডায় উপশম, রাতে বৃদ্ধি...)"
              />
            </div>
          </div>
        )}

        {activeTab === 'mental' && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>মানসিক লক্ষণসমূহ (Mind & Disposition)</label>
            <textarea 
              value={caseState.mentalSymptoms}
              onChange={(e) => setCaseState({ ...caseState, mentalSymptoms: e.target.value })}
              rows={6}
              style={{ ...inputStyle, resize: 'vertical' }}
              placeholder="রোগীর রাগ, ভয়, দুশ্চিন্তা, অস্থিরতা বা অন্যান্য আচরণ..."
            />
          </div>
        )}

        {activeTab === 'physical' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>শারীরিক সাধারণ লক্ষণ (Physical Generals)</label>
              <textarea 
                value={caseState.physicalGenerals}
                onChange={(e) => setCaseState({ ...caseState, physicalGenerals: e.target.value })}
                rows={2}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="কাতরতা (উষ্ণ/কাতর), গোসল, মল-মূত্র ইত্যাদি..."
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>খাদ্য ও তৃষ্ণা (Desire, Aversion & Thirst)</label>
              <input 
                type="text"
                value={caseState.foodDesires}
                onChange={(e) => setCaseState({ ...caseState, foodDesires: e.target.value })}
                style={inputStyle}
                placeholder="মিষ্টি/নোনতা পছন্দ, পানির পিপাসা কেমন?"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>ঘুম, স্বপ্ন ও ঘাম (Sleep, Dreams & Sweat)</label>
              <textarea 
                value={caseState.sleepDream}
                onChange={(e) => setCaseState({ ...caseState, sleepDream: e.target.value })}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="ঘুমের অবস্থা, স্বপ্ন এবং ঘামের প্রকৃতি..."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};