import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  max-width: 980px;
  margin: 27px auto;
  width: 100%;
`;

export const InfoAlbum = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 22px;

  > img {
    max-width: 313px;
    max-height: 313px;
    border-radius: 6px;
  }

  > div {
    color: #8e8e93;
    font-size: 13;
    padding: 13px 0;
    border-bottom: 1px solid #e5e5e5;
  }

  > h3 {
    margin: 10px 0 3px;
    font-size: 12px;
    line-height: 1.33341;
    font-weight: 600;
  }

  > p {
    font-size: 13px;
    color: #7c7c7f;
  }
`;

export const Album = styled.div`
  padding: 0 12px;

  > h1 {
    font-size: 24px;
    line-height: 1.25;
    font-weight: 700;
  }
`;

export const StyledButton = styled(Button)`
  margin: 20px 0 20px;

  > span {
    font-weight: 600;
    margin-left: 4px;
  }

  > svg {
    margin-left: 4px;
  }
`;
