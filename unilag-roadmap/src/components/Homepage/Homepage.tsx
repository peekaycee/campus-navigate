import { Link } from 'react-router-dom';
import './Homepage.css';
import { FaMap } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div className='homepage'>
      <h1>Welcome to <span className='app-name'>CampusNavigate</span></h1>
      <p>Are you lost or late for an appointment?</p>
      <p>
        Just by clicking on the Unilag roadmap to selecting your start and end locations
        you can find the shortest path.
      </p>
      <div className='get-started'>
        <Link to='/graph'>
        <FaMap style={{ fontSize: '30px' }} /><span>Click here to get started</span> 
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
