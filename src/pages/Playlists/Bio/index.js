import React from 'react';
import PropTypes from 'prop-types';

import { MdCallMade } from 'react-icons/md';

import { Row, Col } from '~/components/Grid';
import { Container, About, StyledButton } from './styles';

export default function Bio({ artist }) {
  return (
    <Container>
      <h3>{artist.name}</h3>
      <Row>
        <Col xs="12" sm="12" md="6">
          <span>{artist.about}</span>
          <StyledButton>
            View on <span>Apple music</span>
            <MdCallMade size={13} />
          </StyledButton>
        </Col>
        <Col xs="12" sm="12" md="6">
          <About>
            <li>
              <p>Origin</p>
              <span>{artist.origin}</span>
            </li>
            <li>
              <p>Genre</p>
              <span>{artist.genre}</span>
            </li>
            <li>
              <p>Born</p>
              <span>{artist.born}</span>
            </li>
          </About>
        </Col>
      </Row>
    </Container>
  );
}

Bio.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    born: PropTypes.string.isRequired,
  }).isRequired,
};
