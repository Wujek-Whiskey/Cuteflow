import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = ({menuVisible, setMenuVisible}) => {
  const [imageState, setImageState] = useState('https://via.placeholder.com/450');

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Link className={styles.navbar__brand} to='#'>
          klw
        </Link>
        <div className={styles.navbar__text}>
          <p>
            UX Designer | Frontend Developer <br />
            Portfolio 2022
          </p>
        </div>
        <div className={styles.navbar__hamburger} onClick={() => setMenuVisible(!menuVisible)}>
          { 
            menuVisible 
            ? 'zamknij'
            : 'menu'
          } 
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div 
          style={ 
            menuVisible 
              ? { display: 'block' } 
              : { display: 'none' } 
          } 
          className={styles.nav}>
          <img className={styles.nav__image} src={imageState} alt='placeholder' />
          <ul className={styles.nav__list}>
            <li>
              <Link 
                className={styles.nav__link} 
                to='/' 
                onMouseEnter={() => setImageState('https://via.placeholder.com/450x250')}
                onMouseLeave={() => setImageState('https://via.placeholder.com/450')}>
                home
              </Link>
              <hr />
            </li>
            <li>
              <Link 
                className={styles.nav__link} 
                to='/studio' 
                onMouseEnter={() => setImageState('https://via.placeholder.com/450x650')}
                onMouseLeave={() => setImageState('https://via.placeholder.com/450')}>
                studio
              </Link>
              <hr />
            </li>
            <li>
              <Link 
                className={styles.nav__link} 
                to='/works' 
                onMouseEnter={() => setImageState('https://via.placeholder.com/450x350')}
                onMouseLeave={() => setImageState('https://via.placeholder.com/450')}>
                projekty
              </Link>
              <hr />
            </li>
            <li>
              <Link 
                className={styles.nav__link} 
                to='/contact' 
                onMouseEnter={() => setImageState('https://via.placeholder.com/450x550')}
                onMouseLeave={() => setImageState('https://via.placeholder.com/450')}>
                kontakt
              </Link>
              <hr />
            </li>

            <li>
              <Link className={styles.nav__link} to='#'>instagram</Link>
            </li>
            <li>
              <Link className={styles.nav__link} to='#'>behance</Link>
            </li>
            <li>
              <Link className={styles.nav__link} to='#'>github</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;