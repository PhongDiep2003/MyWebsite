import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <>
      <Layout/>
    </>
  );
}

export default App;
