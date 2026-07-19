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
    onSave({
      patientId,
      ...caseState,
      createdAt: new Date()
    });
  };

  return (
    <div style={{
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: theme.fonts.regular
    }}>
      {/* হেডার */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <button onClick={onBack} style={{ background: 'none', border: 'none', color: theme.colors.primary, cursor: 'pointer', fontSize: '16px', marginBottom: '5px' }}>
            ➔ ফিরে যান
          </button>
          <h2 style={{ color: theme.colors.textPrimary, margin: 0, fontFamily: theme.fonts.bold }}>
            কেস টেকিং: <span style={{ color: theme.colors.primary }}>{patientName}</span>
          </h2>
        </div>
        <button onClick={handleSave} style={{ backgroundColor: theme.colors.secondary, color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontFamily: theme.fonts.bold, cursor: 'pointer' }}>
          কেস সংরক্ষণ করুন
        </button>
      </div>

      {/* ট্যাব নেভিগেশন */}
      <div style={{ display: 'flex', borderBottom: `2px solid ${theme.colors.border}`, marginBottom: '20px', backgroundColor: theme.colors.surface, borderRadius: '8px 8px 0 0' }}>
        <button 
          onClick={() => setActiveTab('chief')}
          style={{ flex: 1, padding: '15px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: theme.fonts.bold, color: activeTab === 'chief' ? theme.colors.primary : theme.colors.textSecondary, borderBottom: activeTab === 'chief' ? `3px solid ${theme.colors.primary}` : 'none' }}
        >
          ১. প্রধান অভিযোগ ও হ্রাস-বৃদ্ধি (Modalities)
        </button>
        <button 
          onClick={() => setActiveTab('mental')}
          style={{ flex: 1, padding: '15px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: theme.fonts.bold, color: activeTab === 'mental' ? theme.colors.primary : theme.colors.textSecondary, borderBottom: activeTab === 'mental' ? `3px solid ${theme.colors.primary}` : 'none' }}
        >
          ২. মানসিক লক্ষণ (Mental Symptoms)
        </button>
        <button 
          onClick={() => setActiveTab('physical')}
          style={{ flex: 1, padding: '15px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: theme.fonts.bold, color: activeTab === 'physical' ? theme.colors.primary : theme.colors.textSecondary, borderBottom: activeTab === 'physical' ? `3px solid ${theme.colors.primary}` : 'none' }}
        >
          ৩. শারীরিক সাধারণ (Physical Generals)
        </button>
      </div>

      {/* ট্যাব কন্টেন্ট */}
      <div style={{ backgroundColor: theme.colors.surface, padding: '25px', borderRadius: '0 0 12px 12px', boxShadow: theme.shadows.card, minHeight: '300px' }}>
        {activeTab === 'chief' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary }}>প্রধান রোগের বিবরণ (Chief Complaints)</label>
              <textarea 
                value={caseState.chiefComplaints}
                onChange={(e) => setCaseState({ ...caseState, chiefComplaints: e.target.value })}
                rows={4}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, outline: 'none', resize: 'vertical' }}
                placeholder="রোগীর মূল কষ্ট ও লক্ষণগুলো বিস্তারিত লিখুন..."
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary }}>হ্রাস-বৃদ্ধি (Modalities - Better / Worse)</label>
              <textarea 
                value={caseState.modalities}
                onChange={(e) => setCaseState({ ...caseState, modalities: e.target.value })}
                rows={3}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, outline: 'none', resize: 'vertical' }}
                placeholder="কিসে বাড়ে বা কিসে কমে? (যেমন: ঠান্ডায় উপশম, গরমে বৃদ্ধি...)"
              />
            </div>
          </div>
        )}

        {activeTab === 'mental' && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary }}>মানসিক লক্ষণসমূহ (Mind & Disposition)</label>
            <textarea 
              value={caseState.mentalSymptoms}
              onChange={(e) => setCaseState({ ...caseState, mentalSymptoms: e.target.value })}
              rows={6}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, outline: 'none', resize: 'vertical' }}
              placeholder="রোগীর রাগ, ভয়, দুশ্চিন্তা, স্মৃতিশক্তি বা আচরণগত লক্ষণসমূহ..."
            />
          </div>
        )}

        {activeTab === 'physical' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary }}>খাদ্য ও তৃষ্ণা (Desire, Aversion & Thirst)</label>
              <input 
                type="text"
                value={caseState.foodDesires}
                onChange={(e) => setCaseState({ ...caseState, foodDesires: e.target.value })}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, outline: 'none' }}
                placeholder="মিষ্টি/নোনতা পছন্দ, পানির পিপাসা কেমন?"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary }}>ঘুম, স্বপ্ন ও ঘাম (Sleep, Dreams & Sweat)</label>
              <textarea 
                value={caseState.sleepDream}
                onChange={(e) => setCaseState({ ...caseState, sleepDream: e.target.value })}
                rows={3}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, outline: 'none', resize: 'vertical' }}
                placeholder="ঘুমের অবস্থা, কেমন স্বপ্ন দেখে এবং ঘামের প্রকৃতি..."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};