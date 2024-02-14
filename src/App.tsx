import React from 'react';
import './App.css';
import HomePage from './screens/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './screens/Cart';
import Header from './components/Header';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Header />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
