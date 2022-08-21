import React from 'react';
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<Navigate to={user.user.isloggedIn ? '/home' : "/"} />}
          />
          {user.user.isloggedIn ?
            <>
              <Route path="/home" element={<Home />} />
            </>
            :
            <Route path="/" element={<Login />} />
          }
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
