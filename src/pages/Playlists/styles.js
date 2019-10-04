import styled from 'styled-components';
import { sizes } from '~/styles/breakpoints';

import Button from '~/components/Button';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Cover = styled.div`
  background: ${({ imageUrl }) => `url('${imageUrl}')`};
  width: 100%;
  height: 250px;
  background-size: 100% 250px;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 12px;
  max-width: 1200px;
  width: 100%;
`;

export const Bio = styled.div`
  > h3 {
    font-size: 24px;
    line-height: 1.25;
    font-weight: 700;
    padding-bottom: 5px;
  }

  > div {
    div {
      padding: 16px;
    }
  }
`;

export const About = styled.ul`
  width: 100%;

  > li {
    border-top: 1px solid #ccc;
    height: 48px;
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 12px;
      color: #888;
    }
  }
`;

export const StyledButton = styled(Button)`
  margin: 20px 0 0;
  display: none;

  @media ${sizes.phone} {
    display: block;
  }

  span {
    font-weight: 600;
    margin-left: 4px;
  }

  svg {
    margin-left: 4px;
  }
`;
