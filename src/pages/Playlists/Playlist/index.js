import React from 'react';
import PropTypes from 'prop-types';

import { List } from './styles';

export default function Playlist({ tracks }) {
  return (
    <List>
      {tracks.map(track => (
        <li key={track.id}>
          <img src={track.coverUrl} alt="Cover" />
          <div>
            <div>
              <p>{track.name}</p>
              <span>{track.artistName}</span>
            </div>
            <span>{track.duration}</span>
          </div>
        </li>
      ))}
    </List>
  );
}

Playlist.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      coverUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};
