import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '2rem',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        textAlign: 'center',
      }}
    >
      <h2>Contact Me</h2>
      <div style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:ilakshgupta@gmail.com"
            style={{ color: '#1abc9c', textDecoration: 'none', fontWeight: 600 }}
          >
            ilakshgupta@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a
            href="tel:7011684007"
            style={{ color: '#1abc9c', textDecoration: 'none', fontWeight: 600 }}
          >
            7011684007
          </a>
        </p>
      </div>
    </section>
  );
}
