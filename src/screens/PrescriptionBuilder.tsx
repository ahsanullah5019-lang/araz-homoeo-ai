import React, { useState } from 'react';
import { theme } from '../utils/theme';

export interface RemedyItem {
  remedyName: string;
  potency: string;
  dosage: string;
  instructions: string;
}

export interface PrescriptionData {
  patientName: string;
  remedies: RemedyItem[];
  dietAdvice: string;
  date: string;
}

interface PrescriptionBuilderProps {
  patientName: string;
  selectedRemedy?: string;
  onGenerate: (prescriptionData: PrescriptionData) => void;
  onCancel: () => void;
}

export const PrescriptionBuilder: React.FC<PrescriptionBuilderProps> = ({
  patientName,
  selectedRemedy = '',
  onGenerate,
  onCancel
}) => {
  // একাধিক ওষুধ ব্যবস্থাপনার জন্য স্টেট
  const [remedies, setRemedies] = useState<RemedyItem[]>([
    {
      remedyName: selectedRemedy || '',
      potency: '30',
      dosage: 'প্রতিদিন সকালে ও রাতে',
      instructions: 'খাবারের ৩০ মিনিট আগে জিভে ২ ফোঁটা।'
    }
  ]);

  const [dietAdvice, setDietAdvice] = useState('টক ও কাঁচা পেঁয়াজ খাওয়া নিষেধ। প্রচুর পানি পান করুন।');

  // কুইক ডায়াটারি অ্যাডভাইস টেমপ্লেট
  const quickAdviceTemplates = [
    'টক ও কাঁচা পেঁয়াজ নিষেধ',
    'কফি ও তামাক সেবন নিষেধ',
    'পর্যাপ্ত বিশ্রামে থাকুন',
    'মরিচ ও মশলাযুক্ত খাবার এড়িয়ে চলুন'
  ];

  // নতুন ওষুধ সারিতে যোগ করা
  const handleAddRemedy = () => {
    setRemedies(prev => [
      ...prev,
      {
        remedyName: '',
        potency: '30',
        dosage: 'দিনে ২ বার',
        instructions: 'খাবারের পর সেব্য'
      }
    ]);
  };

  // ওষুধ রিমুভ করা
  const handleRemoveRemedy = (index: number) => {
    if (remedies.length === 1) {
      alert('কমপক্ষে একটি ওষুধ থাকা আবশ্যক।');
      return;
    }
    setRemedies(prev => prev.filter((_, i) => i !== index));
  };

  // নির্দিষ্ট ওষুধের তথ্য আপডেট করা
  const handleRemedyChange = (index: number, field: keyof RemedyItem, value: string) => {
    setRemedies(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ভ্যালিডেশন চেক
    const hasEmptyRemedy = remedies.some(r => !r.remedyName.trim());
    if (hasEmptyRemedy) {
      alert('অনুগ্রহ করে সকল ওষুধের নাম পূরণ করুন।');
      return;
    }

    onGenerate({
      patientName,
      remedies,
      dietAdvice,
      date: new Date().toLocaleDateString('bn-BD')
    });
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.surface,
        padding: '25px',
        borderRadius: '12px',
        boxShadow: theme.shadows.card,
        maxWidth: '650px',
        margin: '20px auto',
        fontFamily: theme.fonts.regular,
        boxSizing: 'border-box'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ color: theme.colors.textPrimary, marginTop: 0, marginBottom: 0, fontFamily: theme.fonts.bold }}>
          📝 প্রেসক্রিপশন তৈরি করুন: <span style={{ color: theme.colors.primary }}>{patientName}</span>
        </h3>
      </div>

      <hr style={{ border: `1px solid ${theme.colors.border}`, margin: '15px 0 20px 0' }} />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* ওষুধের তালিকা পার্ট */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', fontSize: '14px', color: theme.colors.textPrimary }}>
              💊 ওষুধ ও পোটেন্সি বিবরণ
            </label>
            <button
              type="button"
              onClick={handleAddRemedy}
              style={{
                backgroundColor: theme.colors.primaryLight,
                color: theme.colors.primary,
                border: `1px solid ${theme.colors.primary}`,
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              + অতিরিক্ত ওষুধ যোগ করুন
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {remedies.map((remedyItem, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '12px',
                  borderRadius: '8px',
                  border: `1px solid ${theme.colors.border}`,
                  position: 'relative'
                }}
              >
                {remedies.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveRemedy(index)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'none',
                      border: 'none',
                      color: theme.colors.error,
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    ✕ মুছে ফেলুন
                  </button>
                )}

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <div style={{ flex: 2, minWidth: '160px' }}>
                    <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold' }}>
                      ওষুধের নাম *
                    </label>
                    <input
                      type="text"
                      value={remedyItem.remedyName}
                      onChange={e => handleRemedyChange(index, 'remedyName', e.target.value)}
                      placeholder="যেমন: Nux Vomica"
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '6px',
                        border: `1px solid ${theme.colors.border}`,
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: '110px' }}>
                    <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold' }}>
                      শক্তি (Potency) *
                    </label>
                    <select
                      value={remedyItem.potency}
                      onChange={e => handleRemedyChange(index, 'potency', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '6px',
                        border: `1px solid ${theme.colors.border}`,
                        backgroundColor: '#fff'
                      }}
                    >
                      <option value="6C">6C</option>
                      <option value="30">30</option>
                      <option value="200">200</option>
                      <option value="1M">1M</option>
                      <option value="10M">10M</option>
                      <option value="LM 0/1">LM 0/1</option>
                      <option value="LM 0/2">LM 0/2</option>
                      <option value="Q">Q (Mother Tincture)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '140px' }}>
                    <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold' }}>
                      ডোজ / মাত্রা
                    </label>
                    <input
                      type="text"
                      value={remedyItem.dosage}
                      onChange={e => handleRemedyChange(index, 'dosage', e.target.value)}
                      placeholder="যেমন: দিনে ৩ বার"
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '6px',
                        border: `1px solid ${theme.colors.border}`,
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div style={{ flex: 1.5, minWidth: '180px' }}>
                    <label style={{ display: 'block', fontSize: '12px', marginBottom: '4px', fontWeight: 'bold' }}>
                      সেবনের নির্দেশনা
                    </label>
                    <input
                      type="text"
                      value={remedyItem.instructions}
                      onChange={e => handleRemedyChange(index, 'instructions', e.target.value)}
                      placeholder="যেমন: খাবারের ৩০ মিনিট আগে"
                      style={{
                        width: '100%',
                        padding: '8px',
                        borderRadius: '6px',
                        border: `1px solid ${theme.colors.border}`,
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* পথ্য ও পরামর্শ পার্ট */}
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold', fontSize: '14px' }}>
            🥗 পথ্য ও বিশেষ পরামর্শ (Diet & Advice)
          </label>

          {/* কুইক টেমপ্লেট চিপস */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
            {quickAdviceTemplates.map((template, i) => (
              <span
                key={i}
                onClick={() =>
                  setDietAdvice(prev => (prev ? `${prev} ${template}।` : `${template}।`))
                }
                style={{
                  backgroundColor: '#e0f2fe',
                  color: '#0369a1',
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                + {template}
              </span>
            ))}
          </div>

          <textarea
            value={dietAdvice}
            onChange={e => setDietAdvice(e.target.value)}
            rows={3}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: `1px solid ${theme.colors.border}`,
              outline: 'none',
              resize: 'vertical',
              boxSizing: 'border-box',
              fontFamily: theme.fonts.regular
            }}
          />
        </div>

        {/* সাবমিট ও ক্যানসেল বাটন */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button
            type="button"
            onClick={onCancel}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px',
              border: `1px solid ${theme.colors.border}`,
              backgroundColor: '#fff',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: theme.colors.textSecondary
            }}
          >
            বাতিল
          </button>
          <button
            type="submit"
            style={{
              flex: 1.5,
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: theme.colors.secondary,
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: theme.shadows.button
            }}
          >
            প্রেসক্রিপশন প্রিন্ট / ভিউ করুন ➔
          </button>
        </div>
      </form>
    </div>
  );
};