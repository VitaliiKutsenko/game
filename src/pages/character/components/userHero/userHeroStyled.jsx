import styled from 'styled-components';

export const UserHeroWrapper = styled.div`
  & .avatar-wrapper {
    & svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const UserHeroMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(128, 128, 128, 0.2);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;

  & button {
    position: absolute;
    top: -20px;
    right: -20px;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: none;
  }

  & ul {
    border-radius: 6px;
    padding: 50px;
    background: white;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    & li {
      border-radius: 6px;
      cursor: pointer;
      padding: 5px;
      gap: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1 1 auto;
      word-wrap: break-word;
      background: rgba(197, 188, 188, 0.68);
      transition: 0.3s linear;
      width: 100px;

      &:hover {
        transition: 0.3s linear;
        background: rgba(157, 136, 136, 0.5);
      }

      & svg {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
