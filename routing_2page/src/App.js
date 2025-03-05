import { useState } from 'react';
import './Styles.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app-container">
      <nav className="navbar">
        <button className="nav-link" onClick={() => setActivePage('home')}>🏠 Home</button>
        <button className="nav-link" onClick={() => setActivePage('about')}>📘 About</button>
      </nav>
      <div className="content">
        {activePage === 'home' ? (
          <div className="page-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content area where you can introduce your application.</p>
          </div>
        ) : (
          <div className="page-container">
            <h1>About Us</h1>
            <p>Learn more about our mission, vision, and the people behind this project.</p>
          </div>
        )}
      </div>
    </div>
  );
}


