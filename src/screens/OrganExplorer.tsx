import React, { useState, useEffect } from 'react';
import { ANATOMY_DATABASE, OrganSystem, PathologicalCondition } from '../data/anatomyData';

interface OrganExplorerProps {
  onSelectCondition?: (condition: PathologicalCondition) => void;
  onBack?: () => void;
}

export const OrganExplorer: React.FC<OrganExplorerProps> = ({ onSelectCondition, onBack }) => {
  const [selectedOrgan, setSelectedOrgan] = useState<OrganSystem>(ANATOMY_DATABASE[0]);
  const [selectedCondition, setSelectedCondition] = useState<PathologicalCondition | null>(
    ANATOMY_DATABASE[0]?.conditions[0] || null
  );

  // অর্গান পরিবর্তনের সাথে সাথে প্রথম কন্ডিশনটি সিলেক্ট করে দেওয়া
  useEffect(() => {
    if (selectedOrgan && selectedOrgan.conditions.length > 0) {
      setSelectedCondition(selectedOrgan.conditions[0]);
    } else {
      setSelectedCondition(null);
    }
  }, [selectedOrgan]);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* হেডার */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
        <div>
          <h1 style={{ margin: 0, color: '#1e293b', fontSize: '24px', fontWeight: '700' }}>👁️ অর্গান এনাটমি ও রোগ এক্সপ্লোরার</h1>
          <p style={{ margin: '5px 0 0', color: '#64748b', fontSize: '14px' }}>শরীরের ১১টি প্রধান অঙ্গভিত্তিক প্যাথলজিক্যাল অবস্থা ও তার হোমিওপ্যাথিক ডায়াগনোসিস</p>
        </div>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f1f5f9',
              color: '#334155',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            ⬅️ ব্যাকে যান
          </button>
        )}
      </div>

      {/* অর্গান আইকন বার - ১১টি অর্গান স্ক্রোল করে বা ক্লিক করে সিলেক্ট করার জন্য */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        overflowX: 'auto', 
        paddingBottom: '15px', 
        marginBottom: '20px',
        scrollbarWidth: 'thin'
      }}>
        {ANATOMY_DATABASE.map((organ) => {
          const isSelected = selectedOrgan.id === organ.id;
          return (
            <button
              key={organ.id}
              onClick={() => setSelectedOrgan(organ)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '8px',
                border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
                backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontWeight: isSelected ? 'bold' : 'normal',
                color: isSelected ? '#1e40af' : '#334155',
                boxShadow: isSelected ? '0 2px 4px rgba(37,99,235,0.15)' : 'none',
                transition: 'all 0.2s'
              }}
            >
              <span style={{ fontSize: '20px' }}>{organ.icon}</span>
              <span style={{ fontSize: '14px' }}>{organ.nameBn}</span>
            </button>
          );
        })}
      </div>

      {/* মেইন গ্রিড লেআউট */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {/* বাম পাশ: এনাটমি পিকচার ও বিস্তারিত বর্ণনা */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'relative', height: '220px', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px', backgroundColor: '#f1f5f9' }}>
            <img
              src={selectedOrgan.imageUrl}
              alt={selectedOrgan.nameEn}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                // ছবি লোড না হলে ফলব্যাক ইমেজের জন্য
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60';
              }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', color: '#fff' }}>
              <h3 style={{ margin: 0, fontSize: '18px' }}>{selectedOrgan.nameBn}</h3>
              <span style={{ fontSize: '12px', opacity: 0.9 }}>{selectedOrgan.nameEn}</span>
            </div>
          </div>

          <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '14px', marginBottom: '20px' }}>
            {selectedOrgan.description}
          </p>

          <h4 style={{ color: '#0f172a', marginBottom: '12px', fontSize: '15px', borderBottom: '1px solid #f1f5f9', paddingBottom: '6px' }}>
            সংক্রান্ত প্যাথলজিক্যাল রোগসমূহ:
          </h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {selectedOrgan.conditions.length > 0 ? (
              selectedOrgan.conditions.map((cond) => {
                const isCondSelected = selectedCondition?.id === cond.id;
                return (
                  <div
                    key={cond.id}
                    onClick={() => setSelectedCondition(cond)}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      border: isCondSelected ? '1px solid #2563eb' : '1px solid #e2e8f0',
                      backgroundColor: isCondSelected ? '#2563eb' : '#f8fafc',
                      color: isCondSelected ? '#ffffff' : '#1e293b',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontWeight: '600', fontSize: '15px' }}>{cond.nameBn}</div>
                    <div style={{ fontSize: '12px', opacity: isCondSelected ? 0.9 : 0.7 }}>{cond.nameEn}</div>
                  </div>
                );
              })
            ) : (
              <p style={{ color: '#94a3b8', fontSize: '13px' }}>এই অঙ্গের জন্য কোনো নির্দিষ্ট প্যাথলজিক্যাল তথ্য পাওয়া যায়নি।</p>
            )}
          </div>
        </div>

        {/* ডান পাশ: সিলেক্ট করা রোগের বিস্তারিত ও রেপার্টরি ম্যাপ */}
        {selectedCondition ? (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#1e3a8a', margin: '0 0 6px 0', fontSize: '22px' }}>{selectedCondition.nameBn}</h2>
            <div style={{ color: '#64748b', fontSize: '13px', marginBottom: '12px', fontWeight: '500' }}>{selectedCondition.nameEn}</div>
            
            <p style={{ color: '#334155', fontSize: '14px', lineHeight: '1.5', marginTop: 0, marginBottom: '16px' }}>
              {selectedCondition.description}
            </p>

            <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #f1f5f9', marginBottom: '16px' }}>
              <strong style={{ color: '#0f172a', fontSize: '14px' }}>সাধারণ প্রকাশমান লক্ষণসমূহ:</strong>
              <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
                {selectedCondition.commonSymptoms.map((sym, i) => (
                  <li key={i} style={{ color: '#475569', fontSize: '13px', marginBottom: '4px' }}>{sym}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <strong style={{ color: '#0f172a', fontSize: '14px' }}>সম্পর্কিত রেপার্টরি রুব্রিকস:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                {selectedCondition.repertoryRubrics.map((rubric, i) => (
                  <span key={i} style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '5px 10px', borderRadius: '6px', fontSize: '12px', fontFamily: 'monospace', fontWeight: '500' }}>
                    {rubric}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <strong style={{ color: '#0f172a', fontSize: '14px' }}>প্রাথমিক সম্ভাব্য রেমিডি:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {selectedCondition.recommendedRemedies.map((remedy, i) => (
                  <span key={i} style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '16px', fontSize: '13px', fontWeight: '700' }}>
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
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(22,163,74,0.2)',
                  transition: 'background-color 0.2s'
                }}
              >
                📊 এই রোগের লক্ষণ রেপার্টরাইজেশনে যোগ করুন
              </button>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', minHeight: '300px' }}>
            <p style={{ color: '#94a3b8' }}>বাম পাশের তালিকা থেকে একটি রোগ নির্বাচন করুন</p>
          </div>
        )}
      </div>
    </div>
  );
};