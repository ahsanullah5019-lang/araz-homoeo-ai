import React from 'react';
import { theme } from '../utils/theme';

interface SyncStatusCardProps {
  isOnline: boolean;
  pendingItemsCount: number;
  lastSyncedTime: string;
  onSyncNow: () => void;
  isSyncing: boolean;
}

export const SyncStatusCard: React.FC<SyncStatusCardProps> = ({
  isOnline,
  pendingItemsCount,
  lastSyncedTime,
  onSyncNow,
  isSyncing
}) => {
  return (
    <div style={{
      backgroundColor: theme.colors.surface,
      padding: '20px',
      borderRadius: '12px',
      boxShadow: theme.shadows.card,
      border: `1px solid ${theme.colors.border}`,
      fontFamily: theme.fonts.regular
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h4 style={{ margin: 0, fontFamily: theme.fonts.bold, color: theme.colors.textPrimary }}>
          মেঘ সংযোগ ও ক্লাউড ব্যাকআপ (Cloud Sync)
        </h4>
        <span style={{
          padding: '4px 10px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold',
          backgroundColor: isOnline ? theme.colors.primaryLight : '#FEE2E2',
          color: isOnline ? theme.colors.primary : theme.colors.error
        }}>
          {isOnline ? '● অনলাইন' : '○ অফলাইন মোড'}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
          <span style={{ color: theme.colors.textSecondary }}>অপেক্ষমাণ ডেটা (Pending Sync):</span>
          <span style={{ fontWeight: 'bold', color: pendingItemsCount > 0 ? theme.colors.accent : theme.colors.secondary }}>
            {pendingItemsCount} টি আইটেম
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
          <span style={{ color: theme.colors.textSecondary }}>সর্বশেষ সফল সিঙ্ক:</span>
          <span style={{ color: theme.colors.textPrimary }}>{lastSyncedTime || 'কখনো নয়'}</span>
        </div>
      </div>

      <button
        onClick={onSyncNow}
        disabled={!isOnline || isSyncing || pendingItemsCount === 0}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: isSyncing ? theme.colors.border : (pendingItemsCount > 0 && isOnline ? theme.colors.primary : theme.colors.secondary),
          color: '#fff',
          fontFamily: theme.fonts.bold,
          cursor: (isSyncing || !isOnline || pendingItemsCount === 0) ? 'not-allowed' : 'pointer',
          boxShadow: isOnline && pendingItemsCount > 0 ? theme.shadows.button : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {isSyncing ? 'ডাটা ক্লাউডে পাঠানো হচ্ছে...' : pendingItemsCount === 0 ? '✓ সকল ডেটা সুরক্ষিত (Synced)' : 'এখনই ব্যাকআপ নিন (Sync Now)'}
      </button>
    </div>
  );
};