import React from 'react';

interface AuthButtonProps {
  provider: 'azure' | 'google';
  onAuth: () => void;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ provider, onAuth }) => {
  return (
    <button 
      onClick={onAuth}
      className="auth-button"
    >
      Sign in with {provider === 'azure' ? 'Azure AD' : 'Google'}
    </button>
  );
};