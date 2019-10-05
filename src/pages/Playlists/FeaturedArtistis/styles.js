import styled from 'styled-components';

export const Container = styled.section`
  border-top: 1px solid #ccc;
  margin: 22px auto 16px auto;

  > h4 {
    margin: 16px 0;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 700;
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;

    > div {
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > img {
        width: 146px;
        height: 146px;
        border-radius: 100%;
        border: 1px solid #ccc;
      }
      p {
        padding-top: 5px;
        color: #333;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.5em;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        color: #8e8e93;
      }
    }
  }
`;
