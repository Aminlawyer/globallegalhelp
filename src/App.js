import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbylyF07FJLf1S2esfgnDYxMP2nozHPan3IXlNxqSHZdD_e5dEnR2PggBkA0VYNAtulN/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email })
      });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      alert("Error submitting. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Find Global Legal Help — Anytime, Anywhere</h1>
      <p>We’re building a platform to connect clients worldwide with trusted legal professionals. Sign up to be notified when we launch.</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={submitted}>
          {submitted ? "Thank You!" : "Notify Me"}
        </button>
      </form>
    </div>
  );
}

export default App;
// force redeploy v2
