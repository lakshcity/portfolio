import React from 'react';

// List your PDF certificates here
const certificates = [
  { name: 'Gen AI', file: '/assets/combined3.pdf' },
  { name: 'NPTEL DSA', file: '/assets/nptel dsa.pdf' },
  { name: 'NPTEL OOPS', file: '/assets/nptel oops.pdf' },
  // Add more as needed
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '1rem 2rem',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}
    >
      <h2>Certifications</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={process.env.PUBLIC_URL + cert.file}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              background: '#f8f8f8',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: '1rem 1.5rem',
              width: '180px',
              transition: 'background 0.3s, box-shadow 0.3s',
              color: '#2c3e50',
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              alt="PDF icon"
              style={{ width: '48px', height: '48px', marginBottom: '1rem' }}
            />
            <span style={{
              fontWeight: 600,
              fontSize: '1rem',
              textAlign: 'center',
              wordBreak: 'break-word'
            }}>
              {cert.name}
            </span>
            <span style={{
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              color: '#1abc9c'
            }}>
              View / Download
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
