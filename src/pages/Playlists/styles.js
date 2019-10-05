import styled from 'styled-components';

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
