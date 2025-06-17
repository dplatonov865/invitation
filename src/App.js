import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestList from './components/GuestList';
import Invitation from './components/Invitation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestList />} />
        <Route path="/invitation/:guestName" element={<Invitation />} />
      </Routes>
    </Router>
  );
}

export default App;
