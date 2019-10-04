import styled from 'styled-components';

export const List = styled.ul`
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
