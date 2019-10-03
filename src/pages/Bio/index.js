import React from 'react';

import { Row, Col } from '~/components/Grid';
import { Wrapper, Cover, Container, Bio, About } from './styles';

export default function Teste() {
  return (
    <Wrapper>
      <Cover imageUrl="https://www.eventim.com.br/obj/media/BR-eventim/campaign/jbj/img/photo-bonjovi-001.jpg" />
      <Container>
        <Bio>
          <h3>Lil Wayne</h3>
          <Row>
            <Col xs="12" sm="12" md="6">
              Maybe more than any other rapper in history, Lil Wayne’s output is
              defined by franchises. An artist should be so lucky to sustain the
              kind of longevity that would allow for multi-volume phases the
              likes of Wayne’s Dedication, and Da Drought mixtapes, let alone
              the series that made him into a superstar, Tha Carter. Though
              Wayne was not without projects in between, some seven years were
              allowed to pass between the release of the fourth and fifth
              installments of the lattermost. Fortunately, Wayne has rewarded
              his fans’ patience with 23 tracks that speak to a number of his
              most storied eras.
            </Col>
            <Col xs="12" sm="12" md="6">
              <About>
                <li>
                  <p>Genero</p>
                  <span>Blues, new Orleans</span>
                </li>
                <li>
                  <p>Local</p>
                  <span>Tetse, ndns</span>
                </li>
                <li>
                  <p>Cidade</p>
                  <span>Orleans sc</span>
                </li>
              </About>
            </Col>
          </Row>
        </Bio>
      </Container>
    </Wrapper>
  );
}
