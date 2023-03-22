import styled from 'styled-components';

export const BaseParamsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px gray;
  grid-area: baseParams;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }

  & h3 {
    align-self: center;
    margin: 5px;
  }
`;
export const BaseParamsListWrap = styled.li`
  border-radius: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 1 40%;
  height: auto;
  cursor: pointer;
  &,
  * {
    transition: 0.3s linear;
  }

  &.toggle {
    box-shadow: inset 600px 0 0 0 ${({ color }) => color};
    & .image-wrapper {
      transform: rotateY(180deg) translateX(-100%);
    }
    & p {
      transition-delay: 0.3s;
      transform: translateX(-100px);
    }
  }

  & img {
    border-radius: 10px;
    padding: 5px;
    max-width: 80px;
  }
`;
