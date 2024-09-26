import './App.css';
// import Footer from './components/Footer/Footer';
import CampusNavigation from './components/graph/Graph';
import { BrowserRouter, Routes, Route    } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Homepage />}/>
        <Route  path='/graph' element={<CampusNavigation />}/>
      </Routes>
    </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
