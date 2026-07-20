import React, { useState, useEffect } from 'react';
import { theme } from './utils/theme';
import { Dashboard } from './screens/Dashboard';
import { AddPatient } from './screens/AddPatient';
import { CaseTaking } from './screens/CaseTaking';
import { RepertorySearch } from './screens/RepertorySearch';
import { PrescriptionBuilder } from './screens/PrescriptionBuilder';
import { PrescriptionPreview } from './screens/PrescriptionPreview';
import { SettingsScreen } from './screens/SettingsScreen';
import { PatientHistory } from './screens/PatientHistory';
import { useAppStore } from './store/useAppStore';

type ScreenType = 'dashboard' | 'add-patient' | 'case-taking' | 'patient-history' | 'repertory' | 'prescription-build' | 'prescription-view' | 'settings';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const { selectedPatient, setSelectedPatient } = useAppStore();
  
  // কেস টেকিং ও রেপার্টরি থেকে ডাটা শেয়ারিং স্টেট
  const [lastCaseData, setLastCaseData] = useState<any>(null);
  const [selectedRemedy, setSelectedRemedy] = useState<string>('Ars');
  const [activePrescription, setActivePrescription] = useState<any>(null);

  // স্ক্রিন সাইজ চেঞ্জ ট্র্যাক করা
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (screen: ScreenType) => {
    setCurrentScreen(screen);
    if (isMobile) {
      setIsMobileMenuOpen(false); // মোবাইলে মেনু আইটেমে ক্লিক করলে মেনু বন্ধ হয়ে যাবে
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return (
          <Dashboard 
            onAddPatientClick={() => handleNavClick('add-patient')}
            onSelectPatient={(patient) => {
              setSelectedPatient(patient);
              handleNavClick('case-taking');
            }}
          />
        );
      case 'add-patient':
        return (
          <AddPatient 
            onSuccess={() => handleNavClick('dashboard')} 
            onCancel={() => handleNavClick('dashboard')} 
          />
        );
      case 'case-taking':
        return (
          <CaseTaking 
            patientId={selectedPatient?.id || ''} 
            patientName={selectedPatient?.name || 'কোনো রোগী সিলেক্ট করা হয়নি'} 
            onSave={(caseData) => {
              setLastCaseData(caseData); // কেস টেকিংয়ের লক্ষণ স্টোর করা হলো
              alert('কেস হিস্ট্রি সফলভাবে সংরক্ষিত হয়েছে!');
              handleNavClick('repertory'); // সরাসরি রেপার্টরি স্ক্রিনে পাঠাবে
            }} 
            onBack={() => handleNavClick('dashboard')} 
          />
        );
      case 'patient-history':
        return (
          <PatientHistory 
            onEditCase={(caseData) => {
              setLastCaseData(caseData);
              handleNavClick('case-taking'); // লক্ষণ সংশোধন বা নতুন লক্ষণ যোগ করতে কেস টেকিংয়ে যাবে
            }}
            onGoToRepertory={(symptomsSummary) => {
              setLastCaseData({ symptomsSummary });
              handleNavClick('repertory'); // রেপার্টরি অনুসন্ধানে যাবে
            }}
            onBack={() => handleNavClick('dashboard')}
          />
        );
      case 'repertory':
        return (
          <RepertorySearch 
            patientName={selectedPatient?.name}
            initialSymptoms={lastCaseData?.symptomsSummary || ''} 
            onSelectRemedyForPrescription={(remedyName) => {
              setSelectedRemedy(remedyName); // সিলেক্ট করা ওষুধ রেপার্টরি থেকে নেওয়া হলো
              handleNavClick('prescription-build');
            }}
          />
        );
      case 'prescription-build':
        return (
          <PrescriptionBuilder 
            patientName={selectedPatient?.name || 'অজ্ঞাত রোগী'} 
            selectedRemedy={selectedRemedy} 
            onGenerate={(data) => {
              setActivePrescription(data);
              handleNavClick('prescription-view');
            }} 
            onCancel={() => handleNavClick('repertory')} 
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
            onBack={() => handleNavClick('prescription-build')} 
            onPrintShare={() => {
              window.print();
            }} 
          />
        );
      case 'settings':
        return <SettingsScreen />;
      default:
        return (
          <Dashboard 
            onAddPatientClick={() => handleNavClick('add-patient')}
            onSelectPatient={(patient) => {
              setSelectedPatient(patient);
              handleNavClick('case-taking');
            }}
          />
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: '100vh', backgroundColor: theme.colors.background }}>
      
      {/* মোবাইলের জন্য টপ নেভিগেশন বার */}
      {isMobile && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.colors.textPrimary,
          color: '#fff',
          padding: '12px 20px',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ margin: 0, fontSize: '18px', fontFamily: theme.fonts.bold, color: theme.colors.secondary }}>
            ARAZ Homoeo AI
          </h2>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      )}

      {/* সাইডবার নেভিগেশন (ডেস্কটপ এবং মোবাইল ড্রয়ার) */}
      <nav style={{
        width: isMobile ? '100%' : '260px',
        backgroundColor: theme.colors.textPrimary,
        color: '#fff',
        display: isMobile ? (isMobileMenuOpen ? 'flex' : 'none') : 'flex',
        flexDirection: 'column',
        padding: '20px 10px',
        justifyContent: 'space-between',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        position: isMobile ? 'fixed' : 'relative',
        top: isMobile ? '50px' : '0',
        left: 0,
        bottom: 0,
        zIndex: 999,
        overflowY: 'auto'
      }}>
        <div>
          {!isMobile && (
            <div style={{ padding: '10px 15px', marginBottom: '30px' }}>
              <h2 style={{ margin: 0, fontSize: '20px', fontFamily: theme.fonts.bold, color: theme.colors.secondary }}>
                ARAZ Homoeo AI
              </h2>
              <span style={{ fontSize: '11px', color: theme.colors.textSecondary }}>v1.0.0 Offline-First</span>
            </div>
          )}

          {/* নেভিগেশন লিংকসমূহ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              onClick={() => handleNavClick('dashboard')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'dashboard' ? theme.colors.primary : 'transparent',
                color: '#fff'
              }}
            >
              👥 ড্যাশবোর্ড ও রোগী তালিকা
            </button>

            <button 
              onClick={() => handleNavClick('add-patient')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'add-patient' ? theme.colors.primary : 'transparent',
                color: '#fff'
              }}
            >
              ➕ নতুন রোগী যোগ করুন
            </button>

            <button 
              onClick={() => handleNavClick('case-taking')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'case-taking' ? theme.colors.primary : 'transparent',
                color: '#fff'
              }}
            >
              📝 গাইডেড কেস টেকিং
            </button>

            <button 
              onClick={() => handleNavClick('patient-history')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'patient-history' ? theme.colors.primary : 'transparent',
                color: '#fff'
              }}
            >
              📂 কেস ইতিহাস ও রেকর্ড
            </button>

            <button 
              onClick={() => handleNavClick('repertory')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: currentScreen === 'repertory' ? theme.colors.primary : 'transparent',
                color: '#fff'
              }}
            >
              📊 AI রেপার্টরি সার্চ
            </button>

            <button 
              onClick={() => handleNavClick('prescription-build')}
              style={{
                width: '100%', padding: '12px 15px', border: 'none', borderRadius: '8px', textAlign: 'left', cursor: 'pointer',
                fontFamily: theme.fonts.bold, backgroundColor: ['prescription-build', 'prescription-view'].includes(currentScreen) ? theme.colors.primary : 'transparent',
                color: '#fff'
              }}
            >
              📜 প্রেসক্রিপশন ইঞ্জিন
            </button>
          </div>
        </div>

        <div>
          <button 
            onClick={() => handleNavClick('settings')}
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

      {/* কন্টেন্ট এরিয়া */}
      <main style={{ flex: 1, minHeight: '100vh', overflowY: 'auto' }}>
        {renderScreen()}
      </main>
    </div>
  );
};

export default App;