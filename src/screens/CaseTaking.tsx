import React, { useState } from 'react';
import { theme } from '../utils/theme';

export interface CaseData {
  patientId: string;
  patientName: string;
  chiefComplaints: string;
  modalities: string;
  mentalSymptoms: string;
  physicalGenerals: string;
  foodDesires: string;
  sleepDream: string;
  selectedRubrics: string[];
  imageUrl?: string | null;
  symptomsSummary: string;
  createdAt: Date;
}

interface CaseTakingProps {
  patientId: string;
  patientName: string;
  onSave: (caseData: CaseData) => void;
  onBack: () => void;
  onNavigateToRepertory?: (symptomsSummary: string, selectedRubrics: string[]) => void;
}

// নমুনা রুব্রিক তালিকা (আপনার প্রয়োজনমতো আরও যুক্ত করতে পারবেন)
const AVAILABLE_RUBRICS = [
  { id: 'm1', category: 'মানসিক', name: 'স্বাস্থ্য নিয়ে অতিরিক্ত উদ্বেগ (Anxiety about health)' },
  { id: 'm2', category: 'মানসিক', name: 'অন্ধকারের ভয় (Fear of darkness)' },
  { id: 'm3', category: 'মানসিক', name: 'সান্ত্বনায় রোগ বৃদ্ধি (Consolation aggravates)' },
  { id: 'm4', category: 'মানসিক', name: 'গভীর শোক বা প্রেমে ব্যর্থতা (Grief / Disappointment)' },
  { id: 'h1', category: 'মাথা', name: 'প্রস্রাব হলে মাথাব্যথা কমে (Headache amel. by urination)' },
  { id: 'h2', category: 'মাথা', name: 'রোদের তাপে মাথাব্যথা (Headache from sun)' },
  { id: 'p1', category: 'শারীরিক', name: 'মিষ্টি খাওয়ার প্রবল ইচ্ছা (Desire for sweets)' },
  { id: 'p2', category: 'শারীরিক', name: 'বরফ ঠান্ডা পানি পানের ইচ্ছা (Desire for cold drinks)' },
  { id: 'p3', category: 'শারীরিক', name: 'কপালে ঠান্ডা ঘাম (Cold sweat on forehead)' },
  { id: 's1', category: 'পেট', name: 'বমি করলেও বমি ভাব কমে না (Persistent nausea)' },
  { id: 's2', category: 'পেট', name: 'ডান কাঁধের হাড়ে বা লিভারে ব্যথা (Pain in right scapula)' }
];

export const CaseTaking: React.FC<CaseTakingProps> = ({
  patientId,
  patientName,
  onSave,
  onBack,
  onNavigateToRepertory
}) => {
  const [activeTab, setActiveTab] = useState<'chief' | 'mental' | 'physical' | 'rubrics'>('chief');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedRubrics, setSelectedRubrics] = useState<string[]>([]);

  const [caseState, setCaseState] = useState({
    chiefComplaints: '',
    modalities: '',
    mentalSymptoms: '',
    physicalGenerals: '',
    foodDesires: '',
    sleepDream: ''
  });

  // ছবি আপলোড হ্যান্ডলার
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // রুব্রিক নির্বাচন
  const toggleRubric = (rubricId: string) => {
    setSelectedRubrics(prev =>
      prev.includes(rubricId) ? prev.filter(id => id !== rubricId) : [...prev, rubricId]
    );
  };

  // সংগৃহীত সব লক্ষণ একত্র করে একটি সামারি তৈরি
  const buildSymptomsSummary = () => {
    return [
      caseState.chiefComplaints ? `প্রধান কষ্ট: ${caseState.chiefComplaints}` : '',
      caseState.modalities ? `হ্রাস-বৃদ্ধি: ${caseState.modalities}` : '',
      caseState.mentalSymptoms ? `মানসিক লক্ষণ: ${caseState.mentalSymptoms}` : '',
      caseState.physicalGenerals ? `শারীরিক সাধারণ: ${caseState.physicalGenerals}` : '',
      caseState.foodDesires ? `খাদ্য ও তৃষ্ণা: ${caseState.foodDesires}` : '',
      caseState.sleepDream ? `ঘুম ও ঘাম: ${caseState.sleepDream}` : ''
    ]
      .filter(Boolean)
      .join('. ');
  };

  const handleSave = (): CaseData | null => {
    const fullSymptomText = buildSymptomsSummary();

    if (!fullSymptomText.trim() && selectedRubrics.length === 0) {
      alert('অনুগ্রহ করে অন্তত একটি ঘরে তথ্য লিখুন বা রুব্রিক নির্বাচন করুন।');
      return null;
    }

    const caseData: CaseData = {
      patientId,
      patientName,
      ...caseState,
      selectedRubrics,
      imageUrl: imagePreview,
      symptomsSummary: fullSymptomText,
      createdAt: new Date()
    };

    onSave(caseData);
    return caseData;
  };

  const handleSaveAndRepertorize = () => {
    const savedData = handleSave();
    if (savedData && onNavigateToRepertory) {
      onNavigateToRepertory(savedData.symptomsSummary, savedData.selectedRubrics);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: `1px solid ${theme.colors.border}`,
    outline: 'none',
    fontSize: '14px',
    boxSizing: 'border-box',
    fontFamily: theme.fonts.regular
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        minHeight: '100vh',
        padding: '15px',
        fontFamily: theme.fonts.regular,
        boxSizing: 'border-box'
      }}
    >
      {/* হেডার ও নেভিগেশন */}
      <div
        style={{
          display: 'flex',
        justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
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
            ← পূর্বে ফিরে যান
          </button>
          <h2 style={{ color: theme.colors.textPrimary, margin: 0, fontFamily: theme.fonts.bold, fontSize: '20px' }}>
            📋 কেস টেকিং: <span style={{ color: theme.colors.primary }}>{patientName}</span>
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => handleSave()}
            style={{
              backgroundColor: theme.colors.surface,
              color: theme.colors.primary,
              border: `1px solid ${theme.colors.primary}`,
              padding: '9px 15px',
              borderRadius: '8px',
              fontFamily: theme.fonts.bold,
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            💾 কেস সংরক্ষণ
          </button>

          {onNavigateToRepertory && (
            <button
              onClick={handleSaveAndRepertorize}
              style={{
                backgroundColor: theme.colors.primary,
                color: '#fff',
                border: 'none',
                padding: '9px 15px',
                borderRadius: '8px',
                fontFamily: theme.fonts.bold,
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              📊 সেভ ও রেপার্টরাইজেশন ➔
            </button>
          )}
        </div>
      </div>

      {/* ট্যাব নেভিগেশন */}
      <div
        style={{
          display: 'flex',
          borderBottom: `2px solid ${theme.colors.border}`,
          marginBottom: '15px',
          backgroundColor: theme.colors.surface,
          borderRadius: '8px 8px 0 0',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        {[
          { key: 'chief', label: '১. প্রধান লক্ষণ' },
          { key: 'mental', label: '২. মানসিক লক্ষণ' },
          { key: 'physical', label: '৩. শারীরিক সাধারণ' },
          { key: 'rubrics', label: '৪. রেপার্টরি রুব্রিক্স' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            style={{
              flex: 1,
              minWidth: '120px',
              padding: '12px 10px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontFamily: theme.fonts.bold,
              fontSize: '13px',
              color: activeTab === tab.key ? theme.colors.primary : theme.colors.textSecondary,
              borderBottom: activeTab === tab.key ? `3px solid ${theme.colors.primary}` : 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ট্যাব কন্টেন্ট */}
      <div style={{ backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '0 0 12px 12px', boxShadow: theme.shadows.card, minHeight: '300px' }}>
        {activeTab === 'chief' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                প্রধান রোগের বিবরণ (Chief Complaints)
              </label>
              <textarea
                value={caseState.chiefComplaints}
                onChange={e => setCaseState({ ...caseState, chiefComplaints: e.target.value })}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="রোগীর মূল কষ্ট ও লক্ষণগুলো লিখুন..."
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                হ্রাস-বৃদ্ধি (Modalities)
              </label>
              <textarea
                value={caseState.modalities}
                onChange={e => setCaseState({ ...caseState, modalities: e.target.value })}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="কিসে বাড়ে বা কিসে কমে?..."
              />
            </div>

            {/* ছবি আপলোড সেকশন */}
            <div style={{ marginTop: '10px', border: `1px dashed ${theme.colors.border}`, padding: '15px', borderRadius: '8px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                📷 রোগীর ছবি / ক্ষত বা জিহ্বার ছবি যুক্ত করুন
              </label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {imagePreview && (
                <div style={{ marginTop: '10px' }}>
                  <img src={imagePreview} alt="Symptom" style={{ maxHeight: '150px', borderRadius: '6px' }} />
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'mental' && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
              মানসিক লক্ষণসমূহ (Mind & Disposition)
            </label>
            <textarea
              value={caseState.mentalSymptoms}
              onChange={e => setCaseState({ ...caseState, mentalSymptoms: e.target.value })}
              rows={6}
              style={{ ...inputStyle, resize: 'vertical' }}
              placeholder="রোগীর রাগ, ভয়, দুশ্চিন্তা..."
            />
          </div>
        )}

        {activeTab === 'physical' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                শারীরিক সাধারণ লক্ষণ (Physical Generals)
              </label>
              <textarea
                value={caseState.physicalGenerals}
                onChange={e => setCaseState({ ...caseState, physicalGenerals: e.target.value })}
                rows={2}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="কাতরতা, গোসল, মল-মূত্র..."
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                খাদ্য ও তৃষ্ণা (Desire, Aversion & Thirst)
              </label>
              <input
                type="text"
                value={caseState.foodDesires}
                onChange={e => setCaseState({ ...caseState, foodDesires: e.target.value })}
                style={inputStyle}
                placeholder="পছন্দ/অপছন্দ ও পানির পিপাসা..."
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
                ঘুম, স্বপ্ন ও ঘাম (Sleep, Dreams & Sweat)
              </label>
              <textarea
                value={caseState.sleepDream}
                onChange={e => setCaseState({ ...caseState, sleepDream: e.target.value })}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="ঘুমের ধরন, স্বপ্ন ও ঘাম..."
              />
            </div>
          </div>
        )}

        {activeTab === 'rubrics' && (
          <div>
            <label style={{ display: 'block', marginBottom: '12px', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary, fontSize: '14px' }}>
              🔍 নির্দিষ্ট রুব্রিক নির্বাচন করুন
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '350px', overflowY: 'auto' }}>
              {AVAILABLE_RUBRICS.map(rubric => (
                <label
                  key={rubric.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px',
                    borderRadius: '6px',
                    border: `1px solid ${theme.colors.border}`,
                    cursor: 'pointer',
                    backgroundColor: selectedRubrics.includes(rubric.id) ? '#e3f2fd' : 'transparent'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedRubrics.includes(rubric.id)}
                    onChange={() => toggleRubric(rubric.id)}
                  />
                  <span>
                    <strong style={{ color: theme.colors.primary }}>[{rubric.category}]</strong> {rubric.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};