import './App.css';
import './styles/global.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './pages/Landing';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={Landing} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
