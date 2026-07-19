import React, { useState } from 'react';
import { theme } from '../utils/theme';

interface PrescriptionBuilderProps {
  patientName: string;
  selectedRemedy: string;
  onGenerate: (prescriptionData: any) => void;
  onCancel: () => void;
}

export const PrescriptionBuilder: React.FC<PrescriptionBuilderProps> = ({
  patientName,
  selectedRemedy,
  onGenerate,
  onCancel
}) => {
  const [potency, setPotency] = useState('30');
  const [dosage, setDosage] = useState('প্রতিদিন সকালে ও রাতে');
  const [instructions, setInstructions] = useState('খাবারের ৩০ মিনিট আগে জিভে ২ ফোঁটা।');
  const [dietAdvice, setDietAdvice] = useState('টক ও কাঁচা পেঁয়াজ খাওয়া নিষেধ।');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      remedy: selectedRemedy,
      potency,
      dosage,
      instructions,
      dietAdvice,
      date: new Date().toLocaleDateString('bn-BD')
    });
  };

  return (
    <div style={{
      backgroundColor: theme.colors.surface,
      padding: '25px',
      borderRadius: '12px',
      boxShadow: theme.shadows.card,
      maxWidth: '550px',
      margin: '20px auto',
      fontFamily: theme.fonts.regular
    }}>
      <h3 style={{ color: theme.colors.textPrimary, marginTop: 0, fontFamily: theme.fonts.bold }}>
        প্রেসক্রিপশন তৈরি করুন: <span style={{ color: theme.colors.primary }}>{patientName}</span>
      </h3>
      <hr style={{ border: `1px solid ${theme.colors.border}`, marginBottom: '20px' }} />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>নির্বাচিত ওষুধ</label>
          <input
            type="text"
            value={selectedRemedy}
            disabled
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, backgroundColor: theme.colors.primaryLight, color: theme.colors.primary, fontWeight: 'bold' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>শক্তি (Potency) *</label>
            <select
              value={potency}
              onChange={(e) => setPotency(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none', backgroundColor: '#fff' }}
            >
              <option value="6c">6C</option>
              <option value="30">30</option>
              <option value="200">200</option>
              <option value="1M">1M</option>
              <option value="10M">10M</option>
              <option value="Q">Q (Mother Tincture)</option>
            </select>
          </div>
          <div style={{ flex: 1.5 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>ডোজ / মাত্রা *</label>
            <input
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none' }}
              placeholder="যেমন: দিনে ৩ বার"
            />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>সেবনের নির্দেশনা</label>
          <input
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>পথ্য ও বিশেষ পরামর্শ (Diet & Advice)</label>
          <textarea
            value={dietAdvice}
            onChange={(e) => setDietAdvice(e.target.value)}
            rows={2}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none', resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button type="button" onClick={onCancel} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, backgroundColor: '#fff', cursor: 'pointer' }}>
            বাতিল
          </button>
          <button type="submit" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: theme.colors.secondary, color: '#fff', fontWeight: 'bold', cursor: 'pointer', boxShadow: theme.shadows.button }}>
            প্রেসক্রিপশন ভিউ করুন ➔
          </button>
        </div>
      </form>
    </div>
  );
};