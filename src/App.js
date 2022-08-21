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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<Navigate to={true ? '/home' : "/"} />}
          />
          {true ?
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
