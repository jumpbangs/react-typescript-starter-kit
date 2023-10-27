import React from 'react';
import { Link } from 'react-router-dom';

import { HOME_TITLE } from 'common/constants';
import { Container } from 'components';

const Home = () => {
  return (
    <div>
      <Container>
        <Link to="/">
          <h1>{HOME_TITLE}</h1>
        </Link>
        <p>
          This is a react-typescript starter kit. To test routing click{' '}
          <Link to="/about">here</Link> to navigate to the about page, or click here to navigate to
          the <Link to="/coindesk">coindesk</Link> page.
        </p>
      </Container>
    </div>
  );
};

export default Home;
