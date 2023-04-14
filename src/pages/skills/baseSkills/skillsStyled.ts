import styled from 'styled-components';

export const BaseSkillsWrapper = styled.div`
  height: 100%;
  background: ${({ color }: any) => (color ? color : 'white')};
  border-radius: 10px;
  box-shadow: 0 0 4px 1px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: auto;

  & h3 {
    z-index: 1;
  }
  &:before {
    z-index: 1;
    content: '';
    //width: 100%;
    //height: 100%;
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    filter: contrast(50);
    border-radius: 10px;
  }
  & ul {
    margin: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  & h3 {
    align-self: center;
    margin: 5px;
  }
`;

export const SkillsListWrapper = styled.div<{ range: string; levelColor: string }>`
  flex: 1 1 100%;
  height: auto;
  max-width: 200px;
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
      width: ${({ range }: any) => range}%;
      box-shadow: inset -1px 0 1px 1px rgba(144, 144, 144, 0.5);
      height: 100%;
      top: 0;
      left: 0;
      background: ${({ levelColor }: any) => levelColor};
    }

    & span {
      z-index: 1;
    }
  }
`;
