import React, { useState } from 'react';
import { ANATOMY_DATABASE, OrganSystem, PathologicalCondition } from '../data/anatomyData';

interface OrganExplorerProps {
  onSelectCondition?: (condition: PathologicalCondition) => void;
  onBack?: () => void;
}

export const OrganExplorer: React.FC<OrganExplorerProps> = ({ onSelectCondition, onBack }) => {
  const [selectedOrgan, setSelectedOrgan] = useState<OrganSystem>(ANATOMY_DATABASE[0]);
  const [selectedCondition, setSelectedCondition] = useState<PathologicalCondition | null>(
    ANATOMY_DATABASE[0].conditions[0] || null
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* হেডার */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        <div>
          <h1 style={{ margin: 0, color: '#1e293b', fontSize: '24px' }}>👁️ অর্গান এনোটমি ও রোগ এক্সপ্লোরার</h1>
          <p style={{ margin: '5px 0 0', color: '#64748b' }}>শরীরের অঙ্গভিত্তিক প্যাথলজিক্যাল অবস্থা ও তার হোমিওপ্যাথিক ডায়াগনোসিস</p>
        </div>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              padding: '8px 16px',
              backgroundColor: '#e2e8f0',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            ⬅️ ব্যাকে যান
          </button>
        )}
      </div>

      {/* অর্গান আইকন বার */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '15px', marginBottom: '20px' }}>
        {ANATOMY_DATABASE.map((organ) => (
          <button
            key={organ.id}
            onClick={() => {
              setSelectedOrgan(organ);
              setSelectedCondition(organ.conditions[0] || null);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              borderRadius: '8px',
              border: selectedOrgan.id === organ.id ? '2px solid #2563eb' : '1px solid #cbd5e1',
              backgroundColor: selectedOrgan.id === organ.id ? '#eff6ff' : '#ffffff',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontWeight: selectedOrgan.id === organ.id ? 'bold' : 'normal',
              color: selectedOrgan.id === organ.id ? '#1e40af' : '#334155'
            }}
          >
            <span style={{ fontSize: '20px' }}>{organ.icon}</span>
            <span>{organ.nameBn}</span>
          </button>
        ))}
      </div>

      {/* মেইন গ্রিড লেআউট */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* বাম পাশ: এনোটমি পিকচার ও বিস্তারিত বর্ণনা */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'relative', height: '220px', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px' }}>
            <img
              src={selectedOrgan.imageUrl}
              alt={selectedOrgan.nameEn}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#fff' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>{selectedOrgan.nameBn} ({selectedOrgan.nameEn})</h3>
            </div>
          </div>

          <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '14px', marginBottom: '20px' }}>
            {selectedOrgan.description}
          </p>

          <h4 style={{ color: '#0f172a', marginBottom: '10px' }}>সংক্রান্ত প্যাথলজিক্যাল রোগসমূহ:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {selectedOrgan.conditions.map((cond) => (
              <div
                key={cond.id}
                onClick={() => setSelectedCondition(cond)}
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: '1px solid #cbd5e1',
                  backgroundColor: selectedCondition?.id === cond.id ? '#2563eb' : '#f8fafc',
                  color: selectedCondition?.id === cond.id ? '#ffffff' : '#1e293b'
                }}
              >
                <div style={{ fontWeight: 'bold' }}>{cond.nameBn}</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>{cond.nameEn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ডান পাশ: সিলেক্ট করা রোগের বিস্তারিত ও রেপার্টরি ম্যাপ */}
        {selectedCondition ? (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#1e3a8a', margin: '0 0 10px 0', fontSize: '22px' }}>{selectedCondition.nameBn}</h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginTop: 0 }}>{selectedCondition.description}</p>

            <div style={{ backgroundColor: '#f1f5f9', padding: '12px', borderRadius: '6px', marginBottom: '15px' }}>
              <strong style={{ color: '#0f172a' }}>সাধারণ প্রকাশমান লক্ষণসমূহ:</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                {selectedCondition.commonSymptoms.map((sym, i) => (
                  <li key={i} style={{ color: '#334155', fontSize: '14px' }}>{sym}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#0f172a' }}>সম্পর্কিত রেপার্টরি রুব্রিকস:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {selectedCondition.repertoryRubrics.map((rubric, i) => (
                  <span key={i} style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontFamily: 'monospace' }}>
                    {rubric}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#0f172a' }}>প্রাথমিক সম্ভাব্য রেমিডি:</strong>
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                {selectedCondition.recommendedRemedies.map((remedy, i) => (
                  <span key={i} style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '4px 10px', borderRadius: '12px', fontSize: '13px', fontWeight: 'bold' }}>
                    {remedy}
                  </span>
                ))}
              </div>
            </div>

            {onSelectCondition && (
              <button
                onClick={() => onSelectCondition(selectedCondition)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                📊 এই রোগের লক্ষণ রেপার্টরাইজেশনে যোগ করুন
              </button>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <p style={{ color: '#94a3b8' }}>বাম পাশের তালিকা থেকে একটি রোগ নির্বাচন করুন</p>
          </div>
        )}
      </div>
    </div>
  );
};