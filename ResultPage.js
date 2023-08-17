// ResultPage.js
import React from 'react';
import Email from './images/email.jpg'
import './ResultPage.css';

function ResultPage() {
  return (
    <div className="result-container">
      <img src={Email} 
      alt='email'
      className='email'
      />
      <h1>Check your email</h1>
      <h4>To start using Klaviyo, activate your account with the link sent to</h4>
      <hr />
      <p>Didn't recieve an email?</p>
    </div>
  );
}

export default ResultPage;