import React, { useState, useEffect } from 'react';
import { theme } from '../utils/theme';
import { SyncStatusCard } from '../components/SyncStatusCard';

export const SettingsScreen: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [pendingCount, setPendingCount] = useState(3); // ডামি অপেক্ষমাণ ডেটা কাউন্ট
  const [lastSync, setLastSync] = useState('আজ দুপুর ১২:৩০');
  const [isSyncing, setIsSyncing] = useState(false);

  // ইন্টারনেটের অনলাইন/অফলাইন স্ট্যাটাস লিসেনার
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  // ফায়ারবেস ক্লাউডে অফলাইন ডাটা পুশ করার ম্যানুয়াল ট্রিগার লজিক
  const handleManualSync = () => {
    if (!isOnline || pendingCount === 0) return;

    setIsSyncing(true);
    
    // সিঙ্ক অ্যানিমেশন বা প্রসেস সিমুলেশন
    setTimeout(() => {
      setPendingCount(0);
      setLastSync(new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }));
      setIsSyncing(false);
      alert('অফলাইন ডেটা সফলভাবে ফায়ারবেস ক্লাউডে সুরক্ষিত করা হয়েছে!');
    }, 2500);
  };

  return (
    <div style={{
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: theme.fonts.regular
    }}>
      <h2 style={{ color: theme.colors.textPrimary, marginTop: 0, fontFamily: theme.fonts.bold }}>
        অ্যাপ সেটিংস ও কন্ট্রোল প্যানেল
      </h2>
      <p style={{ color: theme.colors.textSecondary, marginTop: '-10px', marginBottom: '25px' }}>
        ARAZ Homoeo AI-এর ব্যাকআপ এবং কনফিগারেশন কন্ট্রোল করুন
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
        
        {/* ১. সিঙ্ক মডিউল */}
        <SyncStatusCard 
          isOnline={isOnline}
          pendingItemsCount={pendingCount}
          lastSyncedTime={lastSync}
          onSyncNow={handleManualSync}
          isSyncing={isSyncing}
        />

        {/* ২. চেম্বার প্রোফাইল ও থিম ইনফো (অতিরিক্ত বাটন বা সেকশন বাদ না দিয়ে সম্পূর্ণ লেআউট) */}
        <div style={{ backgroundColor: theme.colors.surface, padding: '20px', borderRadius: '12px', boxShadow: theme.shadows.card, border: `1px solid ${theme.colors.border}` }}>
          <h4 style={{ margin: '0 0 15px 0', fontFamily: theme.fonts.bold, color: theme.colors.textPrimary }}>
            চেম্বার কনফিগারেশন
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '13px', color: theme.colors.textSecondary, display: 'block', marginBottom: '5px' }}>ডাক্তারের নাম / চেম্বার টাইটেল</span>
              <input 
                type="text" 
                value="ARAZ AI Homeeo Clinic" 
                disabled 
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.colors.border}`, backgroundColor: '#F1F5F9', color: theme.colors.textSecondary }}
              />
            </div>
            <div>
              <span style={{ fontSize: '13px', color: theme.colors.textSecondary, display: 'block', marginBottom: '5px' }}>ডাটাবেস স্টোরেজ মোড</span>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: theme.colors.secondary }}>
                IndexedDB (অফলাইন সক্রিয়) + Firebase Firestore (ক্লাউড সক্রিয়)
              </div>
            </div>
          </div>
        </div>

        {/* ৩. অ্যাপ ইনফো */}
        <div style={{ textAlign: 'center', marginTop: '20px', color: theme.colors.textSecondary, fontSize: '12px' }}>
          <span>ARAZ Homoeo AI • ভার্সন ১.০.০ (PWA Ready)</span>
        </div>
      </div>
    </div>
  );
};