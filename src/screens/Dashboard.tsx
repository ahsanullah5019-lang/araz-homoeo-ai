import React, { useEffect } from 'react';
import { theme } from '../utils/theme';
import { DashboardCard } from '../components/DashboardCard';
import { useAppStore } from '../store/useAppStore';
import { PatientService } from '../database/services/PatientService';

export const Dashboard: React.FC = () => {
  const { 
    patients, 
    setPatients, 
    searchQuery, 
    setSearchQuery, 
    isLoading, 
    setLoading 
  } = useAppStore();

  // ডাটাবেস থেকে রোগীদের তালিকা লোড করা (অফলাইন-ফার্স্ট)
  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      const data = await PatientService.getAllPatients();
      setPatients(data);
      setLoading(false);
    };
    fetchPatients();
  }, [setPatients, setLoading]);

  // সার্চ কুয়েরির ওপর ভিত্তি করে রোগী ফিল্টার করা
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.phone.includes(searchQuery)
  );

  return (
    <div style={{ 
      backgroundColor: theme.colors.background, 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: theme.fonts.regular 
    }}>
      {/* হেডার সেকশন */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1 style={{ color: theme.colors.textPrimary, margin: 0, fontFamily: theme.fonts.bold }}>ARAZ Homoeo AI</h1>
          <p style={{ color: theme.colors.textSecondary, margin: '5px 0 0 0' }}>ডক্টরস ড্যাশবোর্ড</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{
            backgroundColor: theme.colors.primary,
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: theme.shadows.button,
            fontFamily: theme.fonts.bold
          }}>
            + নতুন রোগী
          </button>
        </div>
      </header>

      {/* ১. স্ট্যাটাস কাউন্টারসমূহ */}
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -10px 20px -10px' }}>
        <DashboardCard title="আজকের রোগী" count={filteredPatients.length} icon="👥" color={theme.colors.primary} />
        <DashboardCard title="আজকের অ্যাপয়েন্টমেন্ট" count="০" icon="📅" color={theme.colors.accent} />
        <DashboardCard title="ফলো-আপ রোগী" count="০" icon="🔄" color={theme.colors.secondary} />
        <DashboardCard title="আজকের আয়" count="৳ ০.০০" icon="💰" subText="সারসংক্ষেপ" color="#8B5CF6" />
      </div>

      {/* ২. ইউনিভার্সাল সার্চ বার */}
      <div style={{ marginBottom: '25px' }}>
        <input 
          type="text" 
          placeholder="নাম বা মোবাইল নম্বর দিয়ে রোগী খুঁজুন (অফলাইনেও কার্যকর)..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '10px',
            border: `1px solid ${theme.colors.border}`,
            boxShadow: theme.shadows.card,
            fontSize: '16px',
            outline: 'none',
            fontFamily: theme.fonts.regular
          }}
        />
      </div>

      {/* ৩. রোগীর তালিকা বা খালি অবস্থার নোটিশ */}
      <div style={{ backgroundColor: theme.colors.surface, borderRadius: '12px', padding: '20px', boxShadow: theme.shadows.card }}>
        <h3 style={{ color: theme.colors.textPrimary, marginTop: 0, marginBottom: '15px', fontFamily: theme.fonts.bold }}>
          রোগীর তালিকা ({filteredPatients.length})
        </h3>
        
        {isLoading ? (
          <p style={{ color: theme.colors.textSecondary, textAlign: 'center' }}>BD Bazar লোড হচ্ছে... দুঃখিত, ARAZ Homoeo AI লোড হচ্ছে...</p>
        ) : filteredPatients.length === 0 ? (
          <p style={{ color: theme.colors.textSecondary, textAlign: 'center', padding: '30px 0' }}>
            {searchQuery ? "এই নামে কোনো রোগী পাওয়া যায়নি।" : "এখনো কোনো রোগী যোগ করা হয়নি।"}
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredPatients.map((patient) => (
              <div key={patient.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                borderRadius: '8px',
                border: `1px solid ${theme.colors.border}`,
                cursor: 'pointer'
              }}>
                <div>
                  <h4 style={{ margin: 0, color: theme.colors.textPrimary, fontFamily: theme.fonts.bold }}>{patient.name}</h4>
                  <span style={{ fontSize: '12px', color: theme.colors.textSecondary }}>
                    বয়স: {patient.age} | লিঙ্গ: {patient.gender} | ফোন: {patient.phone}
                  </span>
                </div>
                <span style={{ color: theme.colors.primary, fontSize: '14px' }}>বিস্তারিত ➔</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};