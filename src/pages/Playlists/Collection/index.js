import React from 'react';
import PropTypes from 'prop-types';

import { MdCallMade } from 'react-icons/md';
import Playlist from '../Playlist';

import { Row, Col } from '~/components/Grid';
import { Container, InfoAlbum, Album, StyledButton } from './styles';

export default function Collection({ collections }) {
  return (
    <Container>
      {collections.map(collection => (
        <Row key={collection.id}>
          <Col xs="12" sm="6" md="5" lg="4">
            <InfoAlbum>
              <img src={collection.coverUrl} alt="Album " />
              <div>{collection.trackCount} songs</div>
              <h3>EDITORS’ NOTES</h3>
              <p>
                Apart from prison, there isnt much that has slowed down Lil
                Waynes prolific creative output throughout the ‘00s. Bizarre
                metaphors, tongue twister raps, and awesomely ridiculous
                couplets abound in these lesser-heard gems pulled from a
                neavvdrly bottomless collection of rhymes.
              </p>
            </InfoAlbum>
          </Col>
          <Col xs="12" sm="6" md="7" lg="8">
            <Album>
              <h1>{collection.name}</h1>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={collection.viewUrl}
              >
                <StyledButton>
                  Listen on <span>Apple music</span>
                  <MdCallMade size={13} />
                </StyledButton>
              </a>
            </Album>
            <Playlist tracks={collection.tracks} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

Collection.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
