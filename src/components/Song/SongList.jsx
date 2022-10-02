import React from 'react';

import Song from './Song';
import styles from 'styles/components/SongList.module.scss';

const songs = [
  {
    header: 'CUTEFLOW - HOT BLOOD',
    url: 'https://www.youtube.com/watch?v=4_SoXMwEpCM',
    date: '2022'
  },
  {
    header: 'CUTEFLOW - DREAM',
    url: 'https://www.youtube.com/watch?v=YhUFRV61StY',
    date: '2022'
  },
  {
    header: 'CUTEFLOW - FRIENDS.',
    url: 'https://www.youtube.com/watch?v=0MUdx5kafks',
    date: '2022'
  },
  {
    header: 'CUTEFLOW - Synthwave Mix.. by CUTEFLOW',
    url: 'https://www.youtube.com/watch?v=yHPCBATnry4',
    date: '2021'
  },
  {
    header: 'CUTEFLOW - HIGHWIND',
    url: 'https://www.youtube.com/watch?v=gvnPcN_RtsE',
    date: '2021'
  },
  {
    header: 'CUTEFLOW - CREDO(CUTEFLOW REMIX)',
    url: 'https://www.youtube.com/watch?v=k9bpw-eO32s',
    date: '2021'
  },
  {
    header: 'CUTEFLOW - MAYVY',
    url: 'https://www.youtube.com/watch?v=L9nOAM2s7fE',
    date: '2020'
  },
  {
    header: 'CUTEFLOW - OBSTACLES',
    url: 'https://www.youtube.com/watch?v=mfTnZ2zP9iA',
    date: '2020'
  },
  {
    header: 'CUTEFLOW - PHINK',
    url: 'https://www.youtube.com/watch?v=aAlW_8WjIMA',
    date: '2020'
  }
]

const SongList = () => {
  const songsList = songs.map((song, index) => <Song song={song} index={index} />);

  return <div className={styles.card__list}>{songsList}</div>;
}

export default SongList;
