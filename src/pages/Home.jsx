import React from 'react';
import ReactPlayer from 'react-player';

import { setDocTitle } from 'utils/setDocTitle';
import { Hero } from 'layouts';

const Home = () => {
  setDocTitle('Strona Główna');

  return (
    <>
      <Hero>
        <ReactPlayer style={{ transform: 'translate(5.5%, 0)' }} width={'90%'} height={'95%'} volume={0.05} controls={false} url={'https://www.youtube.com/watch?v=6vm56tVnqk0'} />
      </Hero>
    </>
  );
};

export default Home;
