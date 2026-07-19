import React from 'react';
import { theme } from '../utils/theme';

interface DashboardCardProps {
  title: string;
  count: string | number;
  icon: string;
  subText?: string;
  color?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  count,
  icon,
  subText,
  color = theme.colors.primary
}) => {
  return (
    <div style={{
      backgroundColor: theme.colors.surface,
      padding: '20px',
      borderRadius: '12px',
      boxShadow: theme.shadows.card,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderLeft: `5px solid ${color}`,
      minWidth: '180px',
      flex: 1,
      margin: '10px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: theme.colors.textSecondary, fontSize: '14px', fontFamily: theme.fonts.regular }}>
          {title}
        </span>
        <span style={{ fontSize: '24px' }}>{icon}</span>
      </div>
      
      <div style={{ marginTop: '15px' }}>
        <h2 style={{ color: theme.colors.textPrimary, margin: 0, fontSize: '28px', fontFamily: theme.fonts.bold }}>
          {count}
        </h2>
        {subText && (
          <p style={{ color: theme.colors.textSecondary, margin: '5px 0 0 0', fontSize: '12px', fontFamily: theme.fonts.regular }}>
            {subText}
          </p>
        )}
      </div>
    </div>
  );
};