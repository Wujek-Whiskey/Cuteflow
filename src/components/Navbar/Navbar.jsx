import React from 'react';
import { Link } from 'react-router-dom';

import { useImageChange } from 'hooks/useImageChange';
import styles from 'styles/components/Navbar.module.scss';

const Navbar = ({menuVisible, setMenuVisible}) => {
  const [imageState, setImageState] = useImageChange('https://via.placeholder.com/450');

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Link className={styles.navbar__brand} to='#'>
          cuteflow
        </Link>
        <div className={styles.navbar__text}>
          <p>
            Producent muzyczny | DJ <br />
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
                to='/biography' 
                onMouseEnter={() => setImageState('https://via.placeholder.com/450x650')}
                onMouseLeave={() => setImageState('https://via.placeholder.com/450')}>
                biografia
              </Link>
              <hr />
            </li>
            <li>
              <Link 
                className={styles.nav__link} 
                to='/works' 
                onMouseEnter={() => setImageState('https://via.placeholder.com/450x350')}
                onMouseLeave={() => setImageState('https://via.placeholder.com/450')}>
                twórczość
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
              <Link className={styles.nav__link} to='https://www.instagram.com'>instagram</Link>
            </li>
            <li>
              <Link className={styles.nav__link} to='https://www.youtube.com/'>youtube</Link>
            </li>
            <li>
              <Link className={styles.nav__link} to='ttps://www.spotify.com/'>spotify</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;