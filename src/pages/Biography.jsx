import React from 'react';

import { Layout } from 'layouts';
import { Navbar } from 'components';
import { useMenuVisible } from 'hooks/useMenuVisible';
import { setDocTitle } from 'utils/setDocTitle';
import 'styles/views/Biography.scss';

const Biography = () => {
  const [menuVisible, setMenuVisible] = useMenuVisible(false);
  setDocTitle('Biografia');

  return (
    <>
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <div style={menuVisible ? { visibility: 'hidden' } : {visibility: 'visible'}}>
        <Layout>
          <div className='biography__section'>
            <img className='biography__image' src='https://via.placeholder.com/450x600' alt='cuteflow' />
            <div className='biography__content'>
              <h1 className='biography__header'>CUTEFLOW</h1>
              <h4 className='biography__subheader'>Producent muzyczny | DJ</h4>
              <p className='biography__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className='biography__breakline' />
              <p className='biography__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Biography;