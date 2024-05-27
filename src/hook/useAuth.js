// src/hooks/useAuth.js
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const requireAuth = () => {
    if (!isAuthenticated) {
      navigate('/');
    }
  };

  return { requireAuth };
};

export default useAuth;
