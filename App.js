// App.js
import React, { useState } from 'react';
import './App.css';
import ResultPage from './ResultPage';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="App">
      {!showResult ? (
        <div className="form-container">
          <h1>Add your sender information</h1>
          <h4>Choose the sender name and email address that will appear in your subscribers' inbox</h4>
          <form onSubmit={handleSubmit}>
          <br />
            <label htmlFor="name" className="input-label">Sender name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
            <br />
            <label htmlFor="email" className="input-label">Sender email address</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
            <br />
            <div className="button-container">
              <button type="submit" className="button">Continue</button>
            </div>
          </form>
        </div>
      ) : (
        <ResultPage />
      )}
    </div>
  );
}

export default App;