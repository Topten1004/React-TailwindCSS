import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LandingPage from "../../components/Pages/LandingPage";

const Landing = () => {
    
    const navigate = useNavigate()

  // Get isAuthenticated from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Check if user is not authenticated, redirect to login page
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]); // Trigger effect when isAuthenticated changes

  return (
    <div>
      {/* Render LandingPage component if authenticated */}
      {isAuthenticated && <LandingPage />}
    </div>
  );
};

export default Landing;
