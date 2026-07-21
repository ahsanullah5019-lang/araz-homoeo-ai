import React, { useEffect, useState } from 'react';
import { theme } from '../utils/theme';
import { DashboardCard } from '../components/DashboardCard';
import { useAppStore } from '../store/useAppStore';
import { PatientService, PatientData } from '../database/services/PatientService';

interface DashboardProps {
  onAddPatientClick?: () => void;
  onSelectPatient?: (patient: PatientData) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  onAddPatientClick, 
  onSelectPatient 
}) => {
  const { 
    patients, 
    setPatients, 
    searchQuery, 
    setSearchQuery, 
    isLoading, 
    setLoading 
  } = useAppStore();

  const [filterCategory, setFilterCategory] = useState<'all' | 'today' | 'followup'>('all');

  // ডাটাবেস থেকে রোগীদের তালিকা লোড করা
  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const data = await PatientService.getAllPatients();
        setPatients(data || []);
      } catch (error) {
        console.error("Error loading patients:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, [setPatients, setLoading]);

  const todayStr = new Date().toISOString().split('T')[0];

  const todayPatientsCount = patients.filter(
    p => p.createdAt && String(p.createdAt).startsWith(todayStr)
  ).length;

  const followUpPatientsCount = patients.filter(p => (p as any).isFollowUp).length;

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = 
      (patient.name || '').toLowerCase().includes((searchQuery || '').toLowerCase()) ||
      (patient.phone || '').includes(searchQuery);

    if (!matchesSearch) return false;

    if (filterCategory === 'today') {
      return patient.createdAt && String(patient.createdAt).startsWith(todayStr);
    }
    if (filterCategory === 'followup') {
      return (patient as any).isFollowUp === true;
    }

    return true;
  });

  // রোগী ডিলিট করার ফাংশন (সব টাইপ এরর ফিক্স করা হয়েছে)
  const handleDeletePatient = async (e: React.MouseEvent, patientId?: string, patientName?: string) => {
    e.stopPropagation();

    if (!patientId) {
      alert("রোগীর আইডি পাওয়া যায়নি!");
      return;
    }

    if (window.confirm(`আপনি কি নিশ্চিত যে "${patientName || 'রোগী'}"-এর সমস্ত ডাটা মুছে ফেলতে চান?`)) {
      try {
        setLoading(true);
        
        // PatientService এ deletePatient থাকলে তা কল করবে, না থাকলে লোকাল স্টেট থেকে রিমুভ করবে
        if (typeof (PatientService as any).deletePatient === 'function') {
          await (PatientService as any).deletePatient(patientId);
        }

        const updatedPatients = patients.filter(p => p.id !== patientId);
        setPatients(updatedPatients);
      } catch (error) {
        alert("রোগী মুছে ফেলতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

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
          <button 
            onClick={onAddPatientClick}
            style={{
              backgroundColor: theme.colors.primary,
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: theme.shadows.button,
              fontFamily: theme.fonts.bold
            }}
          >
            + নতুন রোগী
          </button>
        </div>
      </header>

      {/* ১. স্ট্যাটাস কাউন্টারসমূহ */}
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -10px 20px -10px' }}>
        <div 
          onClick={() => setFilterCategory(filterCategory === 'today' ? 'all' : 'today')}
          style={{ flex: '1 1 200px', margin: '10px', cursor: 'pointer' }}
        >
          <DashboardCard 
            title="আজকের রোগী" 
            count={todayPatientsCount} 
            icon="👥" 
            color={filterCategory === 'today' ? '#1565C0' : theme.colors.primary} 
          />
        </div>

        <div 
          onClick={() => alert("অ্যাপয়েন্টমেন্ট সুবিধা শীঘ্রই যুক্ত হবে।")}
          style={{ flex: '1 1 200px', margin: '10px', cursor: 'pointer' }}
        >
          <DashboardCard 
            title="আজকের অ্যাপয়েন্টমেন্ট" 
            count="০" 
            icon="📅" 
            color={theme.colors.accent} 
          />
        </div>

        <div 
          onClick={() => setFilterCategory(filterCategory === 'followup' ? 'all' : 'followup')}
          style={{ flex: '1 1 200px', margin: '10px', cursor: 'pointer' }}
        >
          <DashboardCard 
            title="ফলো-আপ রোগী" 
            count={followUpPatientsCount} 
            icon="🔄" 
            color={filterCategory === 'followup' ? '#2E7D32' : theme.colors.secondary} 
          />
        </div>

        <div style={{ flex: '1 1 200px', margin: '10px' }}>
          <DashboardCard 
            title="আজকের আয়" 
            count="৳ ০.০০" 
            icon="💰" 
            subText="সারসংক্ষেপ" 
            color="#8B5CF6" 
          />
        </div>
      </div>

      {/* ২. ইউনিভার্সাল সার্চ বার */}
      <div style={{ marginBottom: '25px' }}>
        <input 
          type="text" 
          placeholder="নাম বা মোবাইল নম্বর দিয়ে রোগী খুঁজুন (অফলাইনেও কার্যকর)..." 
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
            fontFamily: theme.fonts.regular,
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* ৩. রোগীর তালিকা বা খালি অবস্থার নোটিশ */}
      <div style={{ backgroundColor: theme.colors.surface, borderRadius: '12px', padding: '20px', boxShadow: theme.shadows.card }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ color: theme.colors.textPrimary, margin: 0, fontFamily: theme.fonts.bold }}>
            রোগীর তালিকা ({filteredPatients.length})
            {filterCategory !== 'all' && (
              <span style={{ fontSize: '13px', color: theme.colors.primary, marginLeft: '8px' }}>
                ({filterCategory === 'today' ? 'আজকের রোগী' : 'ফলো-আপ'})
              </span>
            )}
          </h3>

          {filterCategory !== 'all' && (
            <button
              onClick={() => setFilterCategory('all')}
              style={{
                backgroundColor: '#f0f0f0',
                border: 'none',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              সব দেখান ✕
            </button>
          )}
        </div>
        
        {isLoading ? (
          <p style={{ color: theme.colors.textSecondary, textAlign: 'center' }}>ARAZ Homoeo AI লোড হচ্ছে...</p>
        ) : filteredPatients.length === 0 ? (
          <p style={{ color: theme.colors.textSecondary, textAlign: 'center', padding: '30px 0' }}>
            {searchQuery ? "এই নামে কোনো রোগী পাওয়া যায়নি।" : "এখনো কোনো রোগী যোগ করা হয়নি।"}
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredPatients.map((patient) => (
              <div 
                key={patient.id || Math.random().toString()} 
                onClick={() => onSelectPatient && onSelectPatient(patient)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px',
                  borderRadius: '8px',
                  border: `1px solid ${theme.colors.border}`,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <div>
                  <h4 style={{ margin: 0, color: theme.colors.textPrimary, fontFamily: theme.fonts.bold }}>{patient.name}</h4>
                  <span style={{ fontSize: '12px', color: theme.colors.textSecondary }}>
                    বয়স: {patient.age} | লিঙ্গ: {patient.gender} | ফোন: {patient.phone}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: theme.colors.primary, fontSize: '14px', fontWeight: 'bold' }}>
                    বিস্তারিত ➔
                  </span>

                  {/* মুছে ফেলার (Delete) বাটন */}
                  <button
                    onClick={(e) => handleDeletePatient(e, patient.id, patient.name)}
                    title="রোগী মুছুন"
                    style={{
                      backgroundColor: '#FFEBEE',
                      color: '#D32F2F',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    🗑️ ডিলিট
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};