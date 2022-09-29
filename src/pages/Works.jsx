import React from 'react';

import { Layout } from 'layouts';
import { Navbar, SongList } from 'components';
import { useMenuVisible } from 'hooks/useMenuVisible';
import { setDocTitle } from 'utils/setDocTitle';
// import 'styles/views/Works.scss';

const Works = () => {
  const [menuVisible, setMenuVisible] = useMenuVisible(false);
  setDocTitle('Realizacje');

  return (
    <>
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <div style={menuVisible ? { visibility: 'hidden' } : {visibility: 'visible'}}>
        <Layout>
          <SongList />
        </Layout>
      </div>
    </>
  )
}

export default Works;