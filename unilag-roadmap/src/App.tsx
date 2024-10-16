import './App.css';
import CampusNavigation from './components/graph/Graph';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import React from 'react';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/graph' element={<CampusNavigation />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
