import React, { useEffect, useState } from 'react';
import '../App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import Header from '../components/Header';
import Signin from './Signin';
import Signup from './Signup';
import ProtectedRoute from '../components/ProtectedRoute';
import OrdersPage from './OrdersPage';
import Numbers from '../components/Numbers';

function Appcontext() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log('Tracked user data:', user); // Or send to analytics, etc.
    }
  }, [user]);

  return (
    <>
      <BrowserRouter>
        {user && <Header />}
        <Routes>
          {!user && <Route path="/sign-in" element={<Signin setIsAdmin={setIsAdmin} />} />}
          {!user &&<Route path="/sign-up" element={<Signup setIsAdmin={setIsAdmin} />} />}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            }
          />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/orders" element={<OrdersPage />} />
          {/* Removed duplicate: <Route path="/" element={<Navigate to="/sign-in" />} /> */}
          {/* Optional: Add a true catch-all for 404s if needed */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Appcontext;