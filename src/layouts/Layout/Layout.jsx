import React from 'react';

import styles from 'styles/layouts/Layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <header className={styles.layout}>
        { props.children }
      </header>
    </>
  );
};

export default Layout;