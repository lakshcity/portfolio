import React, { useState } from 'react';

const skillsList = [
  { name: 'Python', level: 95 },
  { name: 'Data Science', level: 90 },
  { name: 'Machine Learning', level: 88 },
  { name: 'C++', level: 85 },
  { name: 'Databases', level: 80 },
  { name: 'Frontend Development', level: 85 },
  { name: 'Creative Problem Solving', level: 92 },
];

export default function Skills() {
  const [highlighted, setHighlighted] = useState(null);

  return (
    <section id="skills" style={{ maxWidth: '900px', margin: '2rem auto', padding: '1rem 2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)' }}>
      <h2>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {skillsList.map((skill, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHighlighted(idx)}
            onMouseLeave={() => setHighlighted(null)}
            style={{
              width: '180px',
              background: highlighted === idx ? 'linear-gradient(90deg, #1abc9c 60%, #16a085 100%)' : '#ecf0f1',
              color: highlighted === idx ? '#fff' : '#333',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: '1rem',
              textAlign: 'center',
              transition: 'background 0.3s, color 0.3s',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <strong style={{ fontSize: '1.1rem' }}>{skill.name}</strong>
            <div style={{ marginTop: '0.5rem', height: '8px', background: '#dfe6e9', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${skill.level}%`, height: '100%', background: highlighted === idx ? '#fff' : '#1abc9c', transition: 'width 0.4s, background 0.3s' }}></div>
            </div>
            <span style={{ fontSize: '0.9rem', marginTop: '0.3rem', display: 'block' }}>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
