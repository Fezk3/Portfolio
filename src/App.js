import './App.css';
import React from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Victor Segura's Portfolio</title>
        <meta name="description" content="Victor Segura's Portfolio" />
        <meta name="keywords" content="Victor Segura's Portfolio" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

