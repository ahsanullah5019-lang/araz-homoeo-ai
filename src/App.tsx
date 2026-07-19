import React, { useState } from 'react';
import { theme } from './utils/theme';
import { Dashboard } from './screens/Dashboard';
import { AddPatient } from './screens/AddPatient';
import { CaseTaking } from './screens/CaseTaking';
import { RepertorySearch } from './screens/RepertorySearch';
import { PrescriptionBuilder } from './screens/PrescriptionBuilder';
import { PrescriptionPreview } from './screens/PrescriptionPreview';
import { SettingsScreen } from './screens/SettingsScreen';
import { useAppStore } from './store/useAppStore';

type ScreenType = 'dashboard' | 'add-patient' | 'case-taking' | 'repertory' | 'prescription-build' | 'prescription-view' | 'settings';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const { selectedPatient, setSelectedPatient } = useAppStore();
  
  // প্রেসক্রিপশন ডেটা লোকাল স্টেট
  const [activePrescription, setActivePrescription] = useState<any>(null);

  // স্ক্রিন রেন্ডারিং লজিক
  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'add-patient':
        return (
          <AddPatient 
            onSuccess={() => setCurrentScreen('dashboard')} 
            onCancel={() => setCurrentScreen('dashboard')} 
          />
        );
      case 'case-taking':
        return (
          <CaseTaking 
            patientId={selectedPatient?.id || 'temp-id'} 
            patientName={selectedPatient?.name || 'অজ্ঞাত রোগী'} 
            onSave={(caseData) => {
              alert('কেস হিস্ট্রি সফলভাবে অফলাইনে সংরক্ষিত হয়েছে!');
              setCurrentScreen('repertory');
            }} 
            onBack={() => setCurrentScreen('dashboard')} 
          />
        );
      case 'repertory':
        return <RepertorySearch />;
      case 'prescription-build':
        return (
          <PrescriptionBuilder 
            patientName={selectedPatient?.name || 'অজ্ঞাত রোগী'} 
            selectedRemedy="Ars" 
            onGenerate={(data) => {
              setActivePrescription(data);
              setCurrentScreen('prescription-view');
            }} 
            onCancel={() => setCurrentScreen('repertory')} 
          />
        );
      case 'prescription-view':
        return (
          <PrescriptionPreview 
            patientInfo={{
              name: selectedPatient?.name || 'অজ্ঞাত রোগী',
              age: selectedPatient?.age || 0,
              gender: selectedPatient?.gender || 'পুরুষ'
            }} 
            prescriptionData={activePrescription} 
            onBack={() => setCurrentScreen('prescription-build')} 
            onPrintShare={() => {
              window.print();
            }} 
          />
        );
      case 'settings':
        return <SettingsScreen />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: theme.colors.background }}>
      {/* বাম পাশের নেভিগেশন বার */}
      <nav style={{
        width: '260px',
        backgroundColor: theme.colors.textPrimary,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 10px',
        justifyContent: 'space-between',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)'
      }}>
        <div>
          {/* লোগো/ব্র্যান্ড */}
          <div style={{ padding: '10px 15px', marginBottom: '30px' }}>
            <h2 style={{ margin: 0, fontSize: '20px', fontFamily: theme.fonts.bold, color: theme.colors.secondary }}>
              ARAZ Homoeo AI
            </h2>
            <span style={{ fontSize: '11px', color: theme.colors.textSecondary }}>v1.0.0 Offline-First</span>
          </div>

          {/* নেভিগেশন লিংকসমূহ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              onClick={() => setCurrentScreen('dashboard')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'dashboard' ? theme.colors.primary : 'transparent',
                color: '#fff', transition: 'all 0.2s'
              }}
            >
              👥 ড্যাশবোর্ড ও রোগী তালিকা
            </button>

            <button 
              onClick={() => setCurrentScreen('add-patient')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'add-patient' ? theme.colors.primary : 'transparent',
                color: '#fff', transition: 'all 0.2s'
              }}
            >
              ➕ নতুন রোগী যোগ করুন
            </button>

            <button 
              onClick={() => {
                if (!selectedPatient) {
                  // এখানে সরাসরি Date অবজেক্ট পাস করা হয়েছে
                  setSelectedPatient({ id: '1', name: 'রহমত আলী', age: 45, gender: 'পুরুষ', phone: '01712345678', createdAt: new Date() });
                }
                setCurrentScreen('case-taking');
              }}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'case-taking' ? theme.colors.primary : 'transparent',
                color: '#fff', transition: 'all 0.2s'
              }}
            >
              📝 গাইডেড কেস টেকিং
            </button>

            <button 
              onClick={() => setCurrentScreen('repertory')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'repertory' ? theme.colors.primary : 'transparent',
                color: '#fff', transition: 'all 0.2s'
              }}
            >
              📊 AI রেপার্টরি সার্চ
            </button>

            <button 
              onClick={() => {
                if (!selectedPatient) {
                  // এখানেও সরাসরি Date অবজেক্ট পাস করা হয়েছে
                  setSelectedPatient({ id: '1', name: 'রহমত আলী', age: 45, gender: 'পুরুষ', phone: '01712345678', createdAt: new Date() });
                }
                setCurrentScreen('prescription-build');
              }}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: ['prescription-build', 'prescription-view'].includes(currentScreen) ? theme.colors.primary : 'transparent',
                color: '#fff', transition: 'all 0.2s'
              }}
            >
              📜 প্রেসক্রিপশন ইঞ্জিন
            </button>
          </div>
        </div>

        {/* নিচের সেটিংস পার্ট */}
        <div>
          <button 
            onClick={() => setCurrentScreen('settings')}
            style={{
              width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
              fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'settings' ? theme.colors.primary : 'transparent',
              color: '#fff', borderTop: `1px solid ${theme.colors.textSecondary}`
            }}
          >
            ⚙️ ক্লাউড সিঙ্ক ও সেটিংস
          </button>
        </div>
      </nav>

      {/* ডান পাশের ডাইনামিক কন্টেন্ট এরিয়া */}
      <main style={{ flex: 1, height: '100vh', overflowY: 'auto' }}>
        {renderScreen()}
      </main>
    </div>
  );
};

export default App;