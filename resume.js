import React from 'react';

const resume = {
  name: 'My Resume',
  file: '/assets/RESUME LAKSH.pdf'
};

export default function Resume() {
  return (
    <section
      id="resume"
      style={{
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '1rem 2rem',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h2>Resume</h2>
      <a
        href={process.env.PUBLIC_URL + resume.file}
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
          padding: '1.5rem 2rem',
          width: '220px',
          transition: 'background 0.3s, box-shadow 0.3s',
          color: '#2c3e50',
          marginTop: '2rem'
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
          alt="PDF icon"
          style={{ width: '60px', height: '60px', marginBottom: '1rem' }}
        />
        <span style={{
          fontWeight: 700,
          fontSize: '1.15rem',
          textAlign: 'center',
          wordBreak: 'break-word'
        }}>
          {resume.name}
        </span>
        <span style={{
          marginTop: '0.7rem',
          fontSize: '1rem',
          color: '#1abc9c'
        }}>
          View / Download
        </span>
      </a>
    </section>
  );
}
