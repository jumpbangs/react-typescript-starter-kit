import React from 'react';

import { ROUTE_NAMES } from 'common/constants';

const About = () => {
  return (
    <div>
      <h1>{ROUTE_NAMES.ABOUT.title}</h1>
      <section>
        This is the about section. Click <a href="/">here</a> to go back to the home page.
      </section>
    </div>
  );
};

export default About;
