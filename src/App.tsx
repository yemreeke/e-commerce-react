import React from 'react';
import './App.css';
import HomePage from './screens/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </Provider>

  );
}

export default App;
