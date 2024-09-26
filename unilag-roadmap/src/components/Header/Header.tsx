import './Header.css';
import { FaHome } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onRefresh: () => void; 
}

const Header: React.FC<HeaderProps> = ({ onRefresh }) => {
  return (
    <section className='header'>
      <Link to='/'>
        <FaHome style={{ fontSize: '22px', marginRight: '5px' }} /> Home
      </Link>
      <FiRefreshCw
        style={{ fontSize: '30px', color: '#fff' }}
        className='refresh'
        onClick={onRefresh}
      />
    </section>
  );
};

export default Header;
