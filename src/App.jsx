import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return (
    <Router>
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/header" element={<Header />} />
            <Route path="/" element={<Main />} />
          </>
        ) : (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;