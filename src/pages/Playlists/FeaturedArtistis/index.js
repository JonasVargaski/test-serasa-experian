import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FeaturedArtistis({ artists }) {
  return (
    <Container>
      <h4>Featured Artistis</h4>
      {artists.map(artist => (
        <div key={artist.id}>
          <div>
            <img src={artist.imageUrl} alt="Artist" />
            <p>{artist.name}</p>
            <span>{artist.genre}</span>
          </div>
        </div>
      ))}
    </Container>
  );
}

FeaturedArtistis.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })
  ).isRequired,
};
