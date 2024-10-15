import './NotFound.css'

import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className='not-found'>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFound;