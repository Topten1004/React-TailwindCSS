import './App.css';
import './styles/global.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './pages/Landing';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
