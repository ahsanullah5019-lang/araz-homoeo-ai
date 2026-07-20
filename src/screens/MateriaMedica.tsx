import React, { useState } from 'react';
import { MATERIA_MEDICA_DATABASE, RemedyInfo } from '../data/materiaMedicaData';

interface MateriaMedicaProps {
  onBack?: () => void;
}

export const MateriaMedica: React.FC<MateriaMedicaProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRemedy, setSelectedRemedy] = useState<RemedyInfo>(
    Object.values(MATERIA_MEDICA_DATABASE)[0]
  );

  const remediesList = Object.values(MATERIA_MEDICA_DATABASE).filter((remedy) =>
    remedy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.keynotes.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        <div>
          <h1 style={{ margin: 0, color: '#1e293b', fontSize: '24px' }}>📚 ডিজিটাল মেটেরিয়া মেডিকা লাইব্রেরি</h1>
          <p style={{ margin: '5px 0 0', color: '#64748b' }}>হোমিওপ্যাথিক ওষুধের বিস্তারিত লক্ষণ, অঙ্গভিত্তিক ক্রিয়া ও কি-নোট রিডিং</p>
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

      {/* Main Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '20px' }}>
        {/* Left Side: Search & Remedy List */}
        <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <input
            type="text"
            placeholder="🔍 ওষুধ বা লক্ষণ খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              marginBottom: '15px',
              boxSizing: 'border-box'
            }}
          />

          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {remediesList.length > 0 ? (
              remediesList.map((remedy) => (
                <div
                  key={remedy.id}
                  onClick={() => setSelectedRemedy(remedy)}
                  style={{
                    padding: '12px',
                    marginBottom: '8px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    backgroundColor: selectedRemedy.id === remedy.id ? '#2563eb' : '#ffffff',
                    color: selectedRemedy.id === remedy.id ? '#ffffff' : '#1e293b',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{remedy.name}</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>{remedy.commonName}</div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#94a3b8' }}>কোনো ওষুধ পাওয়া যায়নি</p>
            )}
          </div>
        </div>

        {/* Right Side: Detailed Materia Medica View */}
        {selectedRemedy && (
          <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '15px', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, color: '#1e3a8a', fontSize: '28px' }}>{selectedRemedy.name}</h2>
              <p style={{ margin: '4px 0 0', color: '#475569', fontStyle: 'italic' }}>
                ল্যাটিন নাম: {selectedRemedy.latinName} | সাধারণ নাম: {selectedRemedy.commonName}
              </p>
            </div>

            {/* Summary */}
            <div style={{ backgroundColor: '#eff6ff', padding: '12px 16px', borderRadius: '6px', marginBottom: '20px', borderLeft: '4px solid #2563eb' }}>
              <strong>এক নজরে সারসংক্ষেপ:</strong> {selectedRemedy.summary}
            </div>

            {/* Keynotes */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#0f172a', borderBottom: '2px solid #cbd5e1', paddingBottom: '5px' }}>🔑 মূল প্রদর্শক লক্ষণ (Keynotes)</h3>
              <ul>
                {selectedRemedy.keynotes.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '6px', color: '#334155' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Organ Affinities */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#0f172a', borderBottom: '2px solid #cbd5e1', paddingBottom: '5px' }}>🎯 প্রধান কার্যকরী অঙ্গসমূহ (Organ Affinities)</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                {selectedRemedy.organAffinities.map((organ, idx) => (
                  <span key={idx} style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '15px', fontSize: '13px', fontWeight: 'bold' }}>
                    {organ}
                  </span>
                ))}
              </div>
            </div>

            {/* Mind & Body Symptoms */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <h4 style={{ color: '#1e293b', marginBottom: '8px' }}>🧠 মানসিক লক্ষণ (Mind)</h4>
                <ul>
                  {selectedRemedy.mindSymptoms.map((m, idx) => (
                    <li key={idx} style={{ fontSize: '14px', color: '#475569' }}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#1e293b', marginBottom: '8px' }}>🫄 পাকস্থলী ও পেটের লক্ষণ</h4>
                <ul>
                  {selectedRemedy.stomachAndAbdomen.map((s, idx) => (
                    <li key={idx} style={{ fontSize: '14px', color: '#475569' }}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modalities: Aggravation & Amelioration */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', backgroundColor: '#f8fafc', padding: '15px', borderRadius: '8px' }}>
              <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '10px' }}>
                <h4 style={{ color: '#dc2626', marginTop: 0 }}>⚠️ রোগ বৃদ্ধি (Aggravation)</h4>
                <ul>
                  {selectedRemedy.aggravation.map((agg, idx) => (
                    <li key={idx} style={{ fontSize: '13px', color: '#475569' }}>{agg}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#16a34a', marginTop: 0 }}>☘️ রোগ উপশম (Amelioration)</h4>
                <ul>
                  {selectedRemedy.amelioration.map((amel, idx) => (
                    <li key={idx} style={{ fontSize: '13px', color: '#475569' }}>{amel}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};