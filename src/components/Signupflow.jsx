import React, { useState } from 'react';
import SignUpPage from './sign-up';
import PersonalInfoForm from './Personalnform';

const SignUpFlow = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (submittedEmail) => {
    setEmail(submittedEmail);
    setStep(2);
  };

  const handlePersonalInfoSubmit = (personalInfo) => {
    // Here you would typically send the combined data (email + personal info) to your backend
    console.log('Sign up complete', { email, ...personalInfo });
    // Redirect to success page or next step in your flow
  };

  return (
    <div>
      {step === 1 && <SignUpPage onSubmit={handleEmailSubmit} />}
      {step === 2 && <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />}
    </div>
  );
};

export default SignUpFlow;