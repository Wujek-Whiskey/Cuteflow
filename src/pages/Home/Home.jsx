import React, {useState} from 'react';
import ReactPlayer from 'react-player';

import { Navbar } from '../../components';
import { setTitle } from '../../utils/setTitle';
import './Home.scss';

const Home = () => {
  setTitle('Strona Główna');
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <header style={menuVisible ? { visibility: 'hidden' } : {visibility: 'visible'} }>
        <ReactPlayer width='100%' height='95%' volume={0.05} url='https://www.youtube.com/watch?v=TtMmzqoFiRI' />
      </header>
    </>
  );
};

export default Home;
