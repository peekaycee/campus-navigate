import './Header.css';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <section className='header'>
      <Link to='/'>
        <FaHome style={{ fontSize: '22px', marginRight: '5px' }} /> Home
      </Link>
    </section>
  );
};

export default Header;
