import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>
        This is a react-typescript starter kit.
        To test routing click <Link to="/about">here</Link> to navigate to the about page
      </p>
    </div>
  );
};

export default Home;
