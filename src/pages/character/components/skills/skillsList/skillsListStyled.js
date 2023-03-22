import styled from 'styled-components';

export const SkillsListWrapper = styled.div`
  flex: 1 1 100%;
  height: auto;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  z-index: 2;
  & * {
    padding: 5px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
  }

  & p {
    width: 100%;
    display: flex;
  }

  & .info {
    min-height: 80px;
    width: 100%;
  }

  & .point-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px;

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;

      & svg {
        box-shadow: none;
        padding: 0;
        margin: 5px;
        display: flex;
      }
    }

    & img {
      box-shadow: none;
      width: 80px;
    }
  }

  & .skill-level {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    background: rgb(255, 255, 255);

    &:after {
      filter: blur(3px);
      z-index: -1;
      border-radius: 6px;
      content: '';
      position: absolute;
      width: ${({ range }) => (range <= 100 ? range : 100)}%;
      box-shadow: inset -1px 0 1px 1px rgba(144, 144, 144, 0.5);
      height: 100%;
      top: 0;
      left: 0;
      background: ${({ levelColor }) => levelColor};
    }

    & span {
      z-index: 1;
    }
  }
`;
