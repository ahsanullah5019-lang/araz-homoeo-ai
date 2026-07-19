import React from 'react';
import { theme } from '../utils/theme';

interface MateriaMedicaModalProps {
  remedyName: string;
  isOpen: boolean;
  onClose: () => void;
}

// অফলাইন মেটেরিয়া মেডিকা মিনি ডাটাবেস
const mockMateriaMedica: Record<string, { keynote: string; mind: string; general: string }> = {
  'Ars': {
    keynote: 'অত্যন্ত উৎকণ্ঠা, অস্থিরতা এবং মৃত্যুভয়। মাঝরাতে রোগের বৃদ্ধি। গরম প্রয়োগে উপশম।',
    mind: 'মৃত্যুর ভয় একা থাকতে পারে না, খিটখিটে মেজাজ, সবকিছু একদম পরিষ্কার-পরিচ্ছন্ন চায়।',
    general: 'জ্বলন্ত সুঁই ফোটার মতো ব্যথা, অল্প অল্প করে বারবার পানি পান করার প্রবণতা।'
  },
  'Bry': {
    keynote: 'সামান্য নড়াচড়াতে কষ্ট বাড়ে, সম্পূর্ণ বিশ্রামে উপশম। শুষ্কতা প্রধান লক্ষণ।',
    mind: 'সবসময় ব্যবসা বা নিজের কাজ নিয়ে কথা বলতে চায়। খিটখিটে মেজাজ।',
    general: 'প্রচণ্ড পিপাসা, অনেক সময় পর পর প্রচুর পরিমাণে ঠাণ্ডা পানি পান করতে চায়।'
  },
  'Puls': {
    keynote: 'নরম মন, সহজেই কেঁদে ফেলে। খোলা বাতাসে ভালো থাকে, গরম ঘরে কষ্ট বাড়ে। পিপাসাহীনতা।',
    mind: 'খুবই পরিবর্তনশীল মন। সান্ত্বনা দিলে ভালো বোধ করে।',
    general: 'চর্বিযুক্ত খাবার অপছন্দ বা সহ্য হয় না। মুখের স্বাদ ঘন ঘন পরিবর্তন হয়।'
  }
};

export const MateriaMedicaModal: React.FC<MateriaMedicaModalProps> = ({ remedyName, isOpen, onClose }) => {
  if (!isOpen) return null;

  const details = mockMateriaMedica[remedyName] || {
    keynote: 'এই ওষুধের বিস্তারিত তথ্য অফলাইন ডেটায় লোড হচ্ছে...',
    mind: 'তথ্য উপলব্ধ নয়।',
    general: 'তথ্য উপলব্ধ নয়।'
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: theme.colors.surface, padding: '25px', borderRadius: '12px',
        maxWidth: '500px', width: '90%', boxShadow: '0px 10px 25px rgba(0,0,0,0.15)',
        fontFamily: theme.fonts.regular, position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: theme.colors.textSecondary }}
        >
          ✕
        </button>

        <h3 style={{ color: theme.colors.primary, marginTop: 0, fontFamily: theme.fonts.bold, borderBottom: `2px solid ${theme.colors.border}`, paddingBottom: '8px' }}>
          Materia Medica: {remedyName}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px', maxHeight: '400px', overflowY: 'auto' }}>
          <div>
            <strong style={{ color: theme.colors.textPrimary }}>Keynote (মূল কথা):</strong>
            <p style={{ margin: '5px 0 0 0', color: theme.colors.textSecondary, fontSize: '14px', lineHeight: '1.5' }}>{details.keynote}</p>
          </div>
          <div>
            <strong style={{ color: theme.colors.textPrimary }}>Mind (মানসিক লক্ষণ):</strong>
            <p style={{ margin: '5px 0 0 0', color: theme.colors.textSecondary, fontSize: '14px', lineHeight: '1.5' }}>{details.mind}</p>
          </div>
          <div>
            <strong style={{ color: theme.colors.textPrimary }}>Generals (শারীরিক সাধারণ):</strong>
            <p style={{ margin: '5px 0 0 0', color: theme.colors.textSecondary, fontSize: '14px', lineHeight: '1.5' }}>{details.general}</p>
          </div>
        </div>
      </div>
    </div>
  );
};