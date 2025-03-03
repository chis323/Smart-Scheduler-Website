import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { firebaseConfig } from './firebaseConfig'; // Import Firebase config
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Firebase 9+ imports
import Home from './Home'; // Make sure to create this component
import Dashboard from './Dashboard'; // Make sure to create this component

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Firebase auth instance

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Logged in as:', user.displayName);
        setUser(user);
        navigate('/dashboard'); // Redirect to dashboard
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };

  return (
    <div>
      {!user ? (
        <Home onLogin={loginWithGoogle} />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
