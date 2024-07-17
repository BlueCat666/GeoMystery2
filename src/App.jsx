import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Dashboard from './pages/DashboardPage/DashboardPage';
import Players from './pages/PlayersPage/PlayersPage'
import NavBar from './components/NavBar/NavBar';
import Login from './pages/LoginPage/LoginPage';
import Signup from './pages/SignupPage/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './assets/Styles/App.css';

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App bg-customBlack min-h-dvh">
      {currentUser && <NavBar />}

      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>
        <Route
          path="/players"
          element={
            <PrivateRoute>
              <Players />
            </PrivateRoute>
          }/>
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={currentUser ? <Navigate to="/" /> : <Signup />} />
        <Route path="/dashboard" element={currentUser ? <Navigate to="/" /> : <Dashboard />} />
        <Route path="/*" element={<h2 className='flex flex-1 justify-center items-center text-7xl text-white'>Page not found</h2>} />
        
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
