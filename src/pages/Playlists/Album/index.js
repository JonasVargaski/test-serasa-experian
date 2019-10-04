import React from 'react';

import { MdCallMade } from 'react-icons/md';
import Playlist from '../Playlist';
import { Row, Col } from '~/components/Grid';

import { Container, InfoAlbum, Album, StyledButton } from './styles';

export default function Aalbum() {
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="5" lg="4">
          <InfoAlbum>
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Features118/v4/5a/6b/a1/5a6ba123-a28a-7f44-99a2-34c4cff9e2d9/source/268x268cc.jpg"
              alt="Album "
            />
            <div>25 songs</div>
            <h3>EDITORS’ NOTES</h3>
            <p>
              Apart from prison, there isnt much that has slowed down Lil Waynes
              prolific creative output throughout the ‘00s. Bizarre metaphors,
              tongue twister raps, and awesomely ridiculous couplets abound in
              these lesser-heard gems pulled from a nearly bottomless collection
              of rhymes.
            </p>
          </InfoAlbum>
        </Col>
        <Col xs="12" sm="12" md="7" lg="8">
          <Album>
            <h1>Lil Wayne: Next Steps</h1>
            <StyledButton>
              Listen on <span>Apple music</span>
              <MdCallMade size={13} />
            </StyledButton>
          </Album>
          <Playlist />
        </Col>
      </Row>
    </Container>
  );
}
