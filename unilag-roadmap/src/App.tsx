import './App.css';
import CampusNavigation from './components/graph/Graph';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/graph' element={<CampusNavigation />} />
        <Route path='*' element={'Page doesn\'t exist'} />
      </Routes>
    </>
  );
};

export default App;
