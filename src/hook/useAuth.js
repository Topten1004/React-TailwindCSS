// src/hooks/useAuth.js
import { useSelector } from 'react-redux';
import { navigate } from 'react-router-dom';

const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const requireAuth = () => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      navigate('/');
    }
  };

  return { requireAuth };
};

export default useAuth;
