import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { AuthenticationProvider } from './context/AuthenticationContext';

function App() {
  return (
    <Router>
      <AuthenticationProvider>
      </AuthenticationProvider>
    </Router>
  );
}

export default App;
