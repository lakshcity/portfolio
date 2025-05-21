import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      background: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <img
        src={process.env.PUBLIC_URL + "/assets/profile.jpeg"}
        alt="Profile"
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #1abc9c',
          marginLeft: '1rem'
        }}
      />
    </nav>
  );
}
