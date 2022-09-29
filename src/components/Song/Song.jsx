import React from "react";
import ReactPlayer from "react-player";

import 'styles/components/Song.scss';

const Song = ({song}) => {
  return (
    <React.Fragment key={song.id}>
      <div className="card__song">
        <div className="card__song-inner">
          <ReactPlayer
            className="card__song-video"
            volume={0.05}
            controls={false}
            url={song.url}
          />
          <div className="card__song-content">
            <h1 className="card__song-header">{song.header}</h1>
            <p className="card__song-description">{song.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Song;
