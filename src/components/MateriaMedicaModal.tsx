import React from 'react';
import { theme } from '../utils/theme';
import { MATERIA_MEDICA_DATABASE } from '../data/materiaMedicaData';

interface MateriaMedicaModalProps {
  remedyName: string; // যেমন: 'Ars', 'Arsenicum Album', 'Nux Vomica' ইত্যাদি
  isOpen: boolean;
  onClose: () => void;
}

// অফলাইন ফলব্যাক মোড ডাটাবেস
const mockMateriaMedica: Record<string, { keynote: string; mind: string; general: string }> = {
  'Ars': {
    keynote: 'অত্যন্ত উৎকণ্ঠা, অস্থিরতা এবং মৃত্যুভয়। মাঝরাতে রোগের বৃদ্ধি। গরম প্রয়োগে উপশম।',
    mind: 'মৃত্যুর ভয়, একা থাকতে পারে না, খিটখিটে মেজাজ, সবকিছু একদম পরিষ্কার-পরিচ্ছন্ন চায়।',
    general: 'জ্বলন্ত সুঁই ফোটার মতো ব্যথা, অল্প অল্প করে বারবার পানি পান করার প্রবণতা।'
  },
  'Bry': {
    keynote: 'সামান্য নড়াচড়াতে কষ্ট বাড়ে, সম্পূর্ণ বিশ্রামে উপশম। শুষ্কতা প্রধান লক্ষণ।',
    mind: 'সবসময় ব্যবসা বা নিজের কাজ নিয়ে কথা বলতে চায়। খিটখিটে মেজাজ।',
    general: 'প্রচণ্ড পিপাসা, অনেক সময় পর পর প্রচুর পরিমাণে ঠাণ্ডা পানি পান করতে চায়।'
  },
  'Puls': {
    keynote: 'নরম মন, সহজেই কেঁদে ফেলে। খোলা বাতাসে ভালো থাকে, গরম ঘরে কষ্ট বাড়ে। পিপাসাহীনতা।',
    mind: 'খুবই পরিবর্তনশীল মন। সান্ত্বনা দিলে ভালো বোধ করে।',
    general: 'চর্বিযুক্ত খাবার অপছন্দ বা সহ্য হয় না। মুখের স্বাদ ঘন ঘন পরিবর্তন হয়।'
  }
};

export const MateriaMedicaModal: React.FC<MateriaMedicaModalProps> = ({ remedyName, isOpen, onClose }) => {
  if (!isOpen) return null;

  // ১. প্রথমে মূল MATERIA_MEDICA_DATABASE থেকে সার্চ করা
  const dbMatch = Object.values(MATERIA_MEDICA_DATABASE).find(
    (item) =>
      item.id.toLowerCase() === remedyName.toLowerCase() ||
      item.name.toLowerCase().includes(remedyName.toLowerCase()) ||
      remedyName.toLowerCase().includes(item.id.toLowerCase())
  );

  // ২. যদি মূল ডাটাবেসে পাওয়া যায়
  let keynote = '';
  let mind = '';
  let general = '';

  if (dbMatch) {
    keynote = dbMatch.keynotes.join('। ');
    mind = dbMatch.mindSymptoms.join('। ');
    general = dbMatch.summary;
  } else {
    // ৩. মূল ডাটাবেসে না পেলে mockMateriaMedica থেকে নাম বা শর্টকোড দিয়ে খোঁজা
    const fallbackKey = Object.keys(mockMateriaMedica).find(
      (key) => remedyName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(remedyName.toLowerCase())
    );

    const details = fallbackKey ? mockMateriaMedica[fallbackKey] : null;

    keynote = details?.keynote || 'এই ওষুধের বিস্তারিত তথ্য অফলাইন ডেটায় লোড হচ্ছে...';
    mind = details?.mind || 'তথ্য উপলব্ধ নয়।';
    general = details?.general || 'তথ্য উপলব্ধ নয়।';
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div
        style={{
          backgroundColor: theme.colors.surface || '#ffffff',
          padding: '25px',
          borderRadius: '12px',
          maxWidth: '520px',
          width: '90%',
          boxShadow: '0px 10px 25px rgba(0,0,0,0.2)',
          fontFamily: theme.fonts.regular,
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            border: 'none',
            background: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: theme.colors.textSecondary || '#64748b'
          }}
        >
          ✕
        </button>

        <h3
          style={{
            color: theme.colors.primary || '#1e293b',
            marginTop: 0,
            fontFamily: theme.fonts.bold,
            borderBottom: `2px solid ${theme.colors.border || '#e2e8f0'}`,
            paddingBottom: '10px',
            fontSize: '18px'
          }}
        >
          📖 Materia Medica Quick View: <span style={{ color: '#2563eb' }}>{remedyName}</span>
        </h3>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginTop: '15px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}
        >
          <div style={{ backgroundColor: '#eff6ff', padding: '10px 12px', borderRadius: '6px' }}>
            <strong style={{ color: '#1e40af', display: 'block', marginBottom: '4px' }}>🔑 Keynote (মূল কথা):</strong>
            <p style={{ margin: 0, color: '#334155', fontSize: '14px', lineHeight: '1.5' }}>{keynote}</p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '10px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <strong style={{ color: theme.colors.textPrimary || '#0f172a', display: 'block', marginBottom: '4px' }}>🧠 Mind (মানসিক লক্ষণ):</strong>
            <p style={{ margin: 0, color: theme.colors.textSecondary || '#475569', fontSize: '14px', lineHeight: '1.5' }}>{mind}</p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '10px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <strong style={{ color: theme.colors.textPrimary || '#0f172a', display: 'block', marginBottom: '4px' }}>🩺 Generals (সাধারণ ধারণা):</strong>
            <p style={{ margin: 0, color: theme.colors.textSecondary || '#475569', fontSize: '14px', lineHeight: '1.5' }}>{general}</p>
          </div>
        </div>
      </div>
    </div>
  );
};