import './Header.css';
import { FaHome } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi'; // Import the refresh icon
import { Link } from 'react-router-dom';

interface HeaderProps {
  onRefresh: () => void; // Define the onRefresh prop type
}

const Header: React.FC<HeaderProps> = ({ onRefresh }) => {
  return (
    <section className='header'>
      <Link to='/'>
        <FaHome style={{ fontSize: '22px', marginRight: '5px' }} /> Home
      </Link>
      <FiRefreshCw
        style={{ fontSize: '30px', color: '#fff', cursor: 'pointer', marginLeft: '10px' }} // Add some styles for the refresh icon
        className='refresh'
        onClick={onRefresh} // Attach the onClick event to the refresh icon
      />
    </section>
  );
};

export default Header;
