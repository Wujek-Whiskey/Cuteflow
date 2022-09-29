import React from 'react';

import { Navbar } from 'components';
import { useMenuVisible } from 'hooks/useMenuVisible';
import styles from 'styles/layouts/Hero.module.scss';

const Hero = (props) => {
  const [menuVisible, setMenuVisible] = useMenuVisible(false);

  return (
    <>
      <Navbar menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <header className={styles.hero} style={menuVisible ? { visibility: 'hidden' } : {visibility: 'visible'} }>
        { props.children }
      </header>
    </>
  );
};

export default Hero;
