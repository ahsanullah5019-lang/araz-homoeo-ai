import React, { useState } from 'react';
import { MATERIA_MEDICA_DATABASE, RemedyInfo } from '../data/materiaMedicaData';

interface MateriaMedicaProps {
  onBack?: () => void;
}

export const MateriaMedica: React.FC<MateriaMedicaProps> = ({ onBack }) => {
  const remedies = Object.values(MATERIA_MEDICA_DATABASE);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRemedy, setSelectedRemedy] = useState<RemedyInfo>(remedies[0]);

  // ফিল্টারিং লজিক (নাম, সাধারণ নাম বা কি-নোট দিয়ে সার্চ)
  const remediesList = remedies.filter((remedy) =>
    remedy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    remedy.keynotes.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
      
      {/* ফিক্সড টপ হেডার (পিছিয়ে যাওয়ার বাটন সহ) */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '12px 24px', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #cbd5e1', 
        flexShrink: 0 
      }}>
        <div>
          <h1 style={{ margin: 0, color: '#1e293b', fontSize: '20px', fontWeight: 'bold' }}>📚 ডিজিটাল মেটেরিয়া মেডিকা এনসাইক্লোপিডিয়া</h1>
          <p style={{ margin: '2px 0 0', color: '#64748b', fontSize: '13px' }}>হোমিওপ্যাথিক মূল প্রদর্শন লক্ষণ, মানসিক অবস্থা ও অঙ্গভিত্তিক ক্রিয়া রেফারেন্স</p>
        </div>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              padding: '8px 18px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ⬅️ ব্যাকে যান
          </button>
        )}
      </div>

      {/* প্রধান ৩-কলামের স্ক্রোলযোগ্য বডি কন্টেইনার */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* কলাম ১: মাঝখানের ফিক্সড সাইজ ওষুধ সার্চ ও তালিকা (স্বাধীন স্ক্রোলবার) */}
        <div style={{ 
          width: '340px', 
          borderRight: '1px solid #cbd5e1', 
          backgroundColor: '#ffffff', 
          display: 'flex', 
          flexDirection: 'column',
          flexShrink: 0
        }}>
          {/* সার্চ বক্স (ফিক্সড) */}
          <div style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
            <input
              type="text"
              placeholder="🔍 ওষুধ বা লক্ষণ লিখুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px', textAlign: 'right' }}>
              মোট ঔষধ: {remediesList.length} টি
            </div>
          </div>

          {/* ওষুধের তালিকা (শুধুমাত্র এটি স্ক্রোল হবে) */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
            {remediesList.length > 0 ? (
              remediesList.map((remedy) => {
                const isSelected = selectedRemedy?.id === remedy.id;
                return (
                  <div
                    key={remedy.id}
                    onClick={() => setSelectedRemedy(remedy)}
                    style={{
                      padding: '12px',
                      marginBottom: '8px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                      border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                      transition: 'all 0.15s ease-in-out'
                    }}
                  >
                    <div style={{ fontWeight: 'bold', fontSize: '15px', color: isSelected ? '#1d4ed8' : '#1e293b' }}>
                      {remedy.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      {remedy.commonName}
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '14px', marginTop: '20px' }}>কোনো ওষুধ পাওয়া যায়নি</p>
            )}
          </div>
        </div>

        {/* কলাম ২: নির্বাচিত ওষুধের বিস্তারিত প্রদর্শন (স্বাধীন স্ক্রোলবার) */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', backgroundColor: '#ffffff' }}>
          {selectedRemedy && (
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              
              {/* ওষুধের শিরোনাম ও সাব-টাইটেল */}
              <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, color: '#1e3a8a', fontSize: '28px', fontWeight: 'bold' }}>{selectedRemedy.name}</h2>
                <p style={{ margin: '4px 0 0', color: '#475569', fontSize: '14px', fontStyle: 'italic' }}>
                  ল্যাটিন নাম: <strong>{selectedRemedy.latinName}</strong> | সাধারণ নাম: <strong>{selectedRemedy.commonName}</strong>
                </p>
              </div>

              {/* এক নজরে সারসংক্ষেপ */}
              <div style={{ backgroundColor: '#eff6ff', padding: '14px 18px', borderRadius: '8px', marginBottom: '20px', borderLeft: '5px solid #2563eb' }}>
                <strong style={{ color: '#1e40af', fontSize: '15px', display: 'block', marginBottom: '4px' }}>📌 সংক্ষেপে ওষুধের নির্যাস:</strong>
                <span style={{ color: '#334155', fontSize: '14px', lineHeight: '1.6' }}>{selectedRemedy.summary}</span>
              </div>

              {/* প্রধান প্রদর্শক লক্ষণ (Keynotes) */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ color: '#0f172a', fontSize: '18px', borderBottom: '1px solid #cbd5e1', paddingBottom: '6px', marginBottom: '12px' }}>
                  🔑 মূল প্রদর্শক লক্ষণসমূহ (Keynotes)
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {selectedRemedy.keynotes.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '8px', color: '#334155', fontSize: '14px', lineHeight: '1.5' }}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* প্রধান কার্যকরী অঙ্গসমূহ (Organ Affinities) */}
              {selectedRemedy.organAffinities && selectedRemedy.organAffinities.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ color: '#0f172a', fontSize: '18px', borderBottom: '1px solid #cbd5e1', paddingBottom: '6px', marginBottom: '12px' }}>
                    🎯 প্রধান কার্যকরী স্থান ও অঙ্গসমূহ (Organ Affinities)
                  </h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedRemedy.organAffinities.map((organ, idx) => (
                      <span key={idx} style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
                        {organ}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* অঙ্গভিত্তিক লক্ষণসমূহ (গ্রিড) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                {selectedRemedy.mindSymptoms && (
                  <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ color: '#1e293b', margin: '0 0 10px 0', fontSize: '16px' }}>🧠 মানসিক লক্ষণ (Mind)</h4>
                    <ul style={{ margin: 0, paddingLeft: '18px' }}>
                      {selectedRemedy.mindSymptoms.map((m, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#475569', marginBottom: '6px', lineHeight: '1.4' }}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedRemedy.headAndNeck && (
                  <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ color: '#1e293b', margin: '0 0 10px 0', fontSize: '16px' }}>🗣️ মাথা, চোখ ও গলা</h4>
                    <ul style={{ margin: 0, paddingLeft: '18px' }}>
                      {selectedRemedy.headAndNeck.map((h, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#475569', marginBottom: '6px', lineHeight: '1.4' }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedRemedy.stomachAndAbdomen && (
                  <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ color: '#1e293b', margin: '0 0 10px 0', fontSize: '16px' }}>🫄 পাকস্থলী ও পেটের লক্ষণ</h4>
                    <ul style={{ margin: 0, paddingLeft: '18px' }}>
                      {selectedRemedy.stomachAndAbdomen.map((s, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#475569', marginBottom: '6px', lineHeight: '1.4' }}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedRemedy.respiratory && (
                  <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ color: '#1e293b', margin: '0 0 10px 0', fontSize: '16px' }}>🫁 শ্বাসযন্ত্র ও কাশি</h4>
                    <ul style={{ margin: 0, paddingLeft: '18px' }}>
                      {selectedRemedy.respiratory.map((r, idx) => (
                        <li key={idx} style={{ fontSize: '13px', color: '#475569', marginBottom: '6px', lineHeight: '1.4' }}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* বৃদ্ধি ও উপশম (Modalities) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                <div>
                  <h4 style={{ color: '#dc2626', margin: '0 0 8px 0', fontSize: '15px' }}>⚠️ রোগ বৃদ্ধি (Aggravation)</h4>
                  <ul style={{ margin: 0, paddingLeft: '18px' }}>
                    {selectedRemedy.aggravation.map((agg, idx) => (
                      <li key={idx} style={{ fontSize: '13px', color: '#475569', marginBottom: '4px' }}>{agg}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#16a34a', margin: '0 0 8px 0', fontSize: '15px' }}>☘️ রোগ উপশম (Amelioration)</h4>
                  <ul style={{ margin: 0, paddingLeft: '18px' }}>
                    {selectedRemedy.amelioration.map((amel, idx) => (
                      <li key={idx} style={{ fontSize: '13px', color: '#475569', marginBottom: '4px' }}>{amel}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ওষুধের পারস্পরিক সম্পর্ক (Relationships) */}
              {selectedRemedy.relationships && (
                <div style={{ backgroundColor: '#fffbebfb', padding: '16px', borderRadius: '8px', border: '1px solid #fde68a', marginBottom: '30px' }}>
                  <h4 style={{ color: '#b45309', margin: '0 0 10px 0', fontSize: '15px' }}>🔗 অন্যান্য ওষুধের সাথে সম্পর্ক (Relationships)</h4>
                  <div style={{ fontSize: '13px', color: '#78350f', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {selectedRemedy.relationships.complementary && (
                      <div><strong>পূরক ওষুধ (Complementary):</strong> {selectedRemedy.relationships.complementary.join(', ')}</div>
                    )}
                    {selectedRemedy.relationships.antidotes && (
                      <div><strong>প্রতিষেধক (Antidotes):</strong> {selectedRemedy.relationships.antidotes.join(', ')}</div>
                    )}
                    {selectedRemedy.relationships.followsWell && (
                      <div><strong>পরবর্তী ভালো ওষুধ (Follows Well):</strong> {selectedRemedy.relationships.followsWell.join(', ')}</div>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};