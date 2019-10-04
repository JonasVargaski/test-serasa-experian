import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 32px auto;
  width: 100%;
`;

export const InfoAlbum = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 313px;
    height: 313px;
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
  margin-left: 16px;

  > h1 {
    font-size: 24px;
    line-height: 1.25;
    font-weight: 700;
  }

  > button {
    color: #f0225b;
    background: #fff;
    outline: none;
    border: 1px solid #f0225b;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 6px 6px;
    margin: 30px 0 22px;

    > span {
      font-weight: 600;
      margin-left: 4px;
    }

    > svg {
      margin-left: 4px;
    }
  }
`;

export const Playlist = styled.ul`
  > li {
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 0 12px;
    color: #8e8e93;

    &:hover {
      background: rgba(0, 0, 0, 0.035);
    }

    img {
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 45px;
      height: 45px;
    }

    > div {
      position: relative;
      margin-left: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      height: 54px;

      &::before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        z-index: 1;
        border-top: 1px solid rgba(0, 0, 0, 0.035);
      }

      > div {
        p {
          color: #333;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5em;
        }
        span {
          font-size: 12px;
          font-weight: 400;
        }
      }
      span {
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
`;

export const Artists = styled.section`
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
