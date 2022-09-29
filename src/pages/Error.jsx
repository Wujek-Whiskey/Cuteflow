import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'layouts';
import { Navbar } from 'components';
import { useMenuVisible } from 'hooks/useMenuVisible';
import { setDocTitle } from 'utils/setDocTitle';
import 'styles/views/Error.scss';

const Error = () => {
  const [menuVisible, setMenuVisible] = useMenuVisible(false);
  setDocTitle('Błąd 404');

  return (
    <>
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <div style={menuVisible ? { visibility: 'hidden' } : {visibility: 'visible'}}>
        <Layout>
          <div className='layout__card'>
            <div className='layout__content'>
              <h1 className='layout__content-header'>Strona nie została znaleziona!</h1>
              <p className='layout__content-text'>
                Nie możemy znaleźć strony, której szukasz...
                <br /><br />
                Wejdź na naszą stronę główną lub wybierz 
                interesujący cię temat poniżej.
              </p>
              <div className='layout__buttons'>
                <Link to='/' className='layout__btn'>Strona główna</Link>
                <Link to='/biography' className='layout__btn'>Biografia</Link>
                <Link to='/works' className='layout__btn'>Realizacje</Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Error;