
import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h1>Find Global Legal Help — Anytime, Anywhere</h1>
      <p>We’re building a platform to connect clients worldwide with trusted legal professionals. Sign up to be notified when we launch.</p>
      <div className="form">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Notify Me</button>
      </div>
    </div>
  );
}

export default App;
