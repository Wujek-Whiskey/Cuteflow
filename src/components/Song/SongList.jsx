import React from 'react';

import Song from './Song';
import styles from 'styles/components/SongList.module.scss';

const songs = [
  {
    id: 1,
    header: 'Cuteflow',
    url: 'https://www.youtube.com/watch?v=6vm56tVnqk0',
    description: 'opis'
  },
  {
    id: 2,
    header: 'Cuteflow',
    url: 'https://www.youtube.com/watch?v=6vm56tVnqk0',
    description: 'opis'
  },
  {
    id: 3,
    header: 'Cuteflow',
    url: 'https://www.youtube.com/watch?v=6vm56tVnqk0',
    description: 'opis'
  },
  {
    id: 4,
    header: 'Cuteflow',
    url: 'https://www.youtube.com/watch?v=6vm56tVnqk0',
    description: 'opis'
  },
  {
    id: 5,
    header: 'Cuteflow',
    url: 'https://www.youtube.com/watch?v=6vm56tVnqk0',
    description: 'opis'
  },
  {
    id: 6,
    header: 'Cuteflow',
    url: 'https://www.youtube.com/watch?v=6vm56tVnqk0',
    description: 'opis'
  },
  {
    id: 7,
    header: 'Cuteflow',
    url: 'https://www.youtube.com/watch?v=6vm56tVnqk0',
    description: 'opis'
  }
]

const SongList = () => {
  const songsList = songs.map((song) => <Song song={song} />);

  return <div className={styles.card__list}>{songsList}</div>;
}

export default SongList;
