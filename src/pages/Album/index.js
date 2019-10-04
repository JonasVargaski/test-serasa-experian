import React from 'react';

import { MdCallMade } from 'react-icons/md';
import { Row, Col } from '~/components/Grid';
import { Container, InfoAlbum, Album, Playlist, Artists } from './styles';

export default function album() {
  return (
    <Container>
      <Row>
        <Col sm="12" md="5" lg="4">
          <InfoAlbum>
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Features118/v4/5a/6b/a1/5a6ba123-a28a-7f44-99a2-34c4cff9e2d9/source/268x268cc.jpg"
              alt="Album "
            />
            <div>25 songs</div>
            <h3>EDITORS’ NOTES</h3>
            <p>
              Apart from prison, there isn't much that has slowed down Lil
              Wayne's prolific creative output throughout the ‘00s. Bizarre
              metaphors, tongue twister raps, and awesomely ridiculous couplets
              abound in these lesser-heard gems pulled from a nearly bottomless
              collection of rhymes.
            </p>
          </InfoAlbum>
        </Col>
        <Col sm="12" md="7" lg="8">
          <Album>
            <h1>Lil Wayne: Next Steps</h1>
            <button type="button">
              Listem on <span>Apple music</span>
              <MdCallMade size={13} />
            </button>
            <Playlist>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
              <li>
                <img
                  src="https://s.yimg.com/ny/api/res/1.2/b5tX9UCX8LjiD09LCDfMeA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/rollingstone.com/3dd7ffdb4327a801d1bf8a814feaadc1"
                  alt="Autor"
                />
                <div>
                  <div>
                    <p>John (feat. Rick Ross)</p>
                    <span>lill Wayne</span>
                  </div>
                  <span>4:46</span>
                </div>
              </li>
            </Playlist>
          </Album>
        </Col>
      </Row>
      <Artists>
        <h4>Featured Artistis</h4>
        <div>
          <div>
            <img
              src="https://cdn-ofuxico.akamaized.net/img/upload/noticias/2017/07/20/maluma-prepara-lancamento-de-disco-em-ingles-1_298811_36.jpg"
              alt="Artist"
            />
            <p>John (feat. Rick Ross)</p>
            <span>lill Wayne</span>
          </div>
          <div>
            <img
              src="https://cdn-ofuxico.akamaized.net/img/upload/noticias/2017/07/20/maluma-prepara-lancamento-de-disco-em-ingles-1_298811_36.jpg"
              alt="Artist"
            />
            <p>John (feat. Rick Ross)</p>
            <span>lill Wayne</span>
          </div>
          <div>
            <img
              src="https://cdn-ofuxico.akamaized.net/img/upload/noticias/2017/07/20/maluma-prepara-lancamento-de-disco-em-ingles-1_298811_36.jpg"
              alt="Artist"
            />
            <p>John (feat. Rick Ross)</p>
            <span>lill Wayne</span>
          </div>
        </div>
      </Artists>
    </Container>
  );
}
