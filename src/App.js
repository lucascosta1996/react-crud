import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { AuthenticationProvider } from './context/AuthenticationContext';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthenticationProvider>
        <Route exact path="/" render={ () => (
          <ProtectedRoute />
        ) } />
        <Route path="/login" component={ Login } />
      </AuthenticationProvider>
    </Router>
  );
}

export default App;
