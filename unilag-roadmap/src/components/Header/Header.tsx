import './Header.css';
import { FaHome } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section className='header'>
      <Link to='/'>
        <FaHome style={{ fontSize: '22px', marginRight: '5px' }} /> Home
      </Link>
      <FiRefreshCw
        style={{ fontSize: '30px', color: '#fff' }}
        className='refresh'
        onClick={handleRefresh}
      />
    </section>
  );
};

export default Header;
