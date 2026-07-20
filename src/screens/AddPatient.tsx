import React, { useState } from 'react';
import { theme } from '../utils/theme';
import { PatientService } from '../database/services/PatientService';
import { useAppStore } from '../store/useAppStore';

interface AddPatientProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const AddPatient: React.FC<AddPatientProps> = ({ onSuccess, onCancel }) => {
  const { setLoading } = useAppStore();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'পুরুষ',
    phone: '',
    photoUrl: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.phone) {
      setError('অনুগ্রহ করে সবকটি আবশ্যিক ফিল্ড পূরণ করুন।');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await PatientService.addPatient({
        name: formData.name,
        age: parseInt(formData.age) || 0,
        gender: formData.gender,
        phone: formData.phone,
        photoUrl: formData.photoUrl || undefined
      });

      setLoading(false);

      if (result && result.success) {
        onSuccess();
      } else {
        console.error('Patient Service returned error:', result);
        const errorMsg = result?.error || 'রোগী সংরক্ষণ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।';
        setError(typeof errorMsg === 'string' ? errorMsg : 'রোগী সংরক্ষণ করতে সমস্যা হয়েছে।');
      }
    } catch (err: any) {
      setLoading(false);
      console.error('Unhandled Add Patient Error:', err);
      setError(`ত্রুটি: ${err.message || 'রোগী সংরক্ষণ করা যায়নি।'}`);
    }
  };

  return (
    <div style={{
      backgroundColor: theme.colors.surface,
      padding: '25px',
      borderRadius: '12px',
      boxShadow: theme.shadows.card,
      maxWidth: '500px',
      margin: '20px auto',
      fontFamily: theme.fonts.regular
    }}>
      <h2 style={{ color: theme.colors.textPrimary, marginTop: 0, fontFamily: theme.fonts.bold }}>নতুন রোগী নিবন্ধন</h2>
      <hr style={{ border: `1px solid ${theme.colors.border}`, marginBottom: '20px' }} />

      {error && <p style={{ color: theme.colors.error, fontSize: '14px', backgroundColor: '#ffebee', padding: '8px', borderRadius: '4px' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: theme.colors.textPrimary }}>রোগীর নাম *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none' }}
            placeholder="পূর্ণ নাম লিখুন"
          />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', color: theme.colors.textPrimary }}>বয়স *</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none' }}
              placeholder="বয়স"
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', color: theme.colors.textPrimary }}>লিঙ্গ</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none', backgroundColor: '#fff' }}
            >
              <option value="পুরুষ">পুরুষ</option>
              <option value="মহিলা">মহিলা</option>
              <option value="অন্যান্য">অন্যান্য</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: theme.colors.textPrimary }}>মোবাইল নম্বর *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, outline: 'none' }}
            placeholder="01xxxxxxxxx"
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button type="button" onClick={onCancel} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: `1px solid ${theme.colors.border}`, backgroundColor: '#fff', cursor: 'pointer' }}>
            বাতিল
          </button>
          <button type="submit" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: theme.colors.primary, color: '#fff', fontWeight: 'bold', cursor: 'pointer', boxShadow: theme.shadows.button }}>
            সংরক্ষণ করুন
          </button>
        </div>
      </form>
    </div>
  );
};