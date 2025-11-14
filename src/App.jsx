import React from 'react';
import { AuthProvider } from './components/AuthContext';
import Appcontext from './pages/Appcontext';
// import { AuthProvider } from './AuthContext';
// import AppContent from './AppContent'; // New component for content and tracking

function App() {
  return (
    <AuthProvider>
      <Appcontext />
    </AuthProvider>
  );
}

export default App;