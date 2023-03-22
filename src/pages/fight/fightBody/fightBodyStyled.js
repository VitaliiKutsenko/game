import styled from 'styled-components';

export const BodyWrapper = styled.div`
  position: relative;
`;
export const FightBodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & svg[data-position='head'] {
    fill: tomato;
    transform: translateY(20px);
  }
  & svg[data-position='shoulder'] {
    fill: orange;
  }
  & svg[data-position='cheast'] {
    fill: gold;
  }
  & svg[data-position='stomach'] {
    fill: goldenrod;
  }
  & svg[data-position='arm'] {
    fill: coral;
  }
  & svg[data-position='hands'] {
    fill: darkorange;
  }

  & svg[data-position='legs'] {
    position: absolute;
    top: 80%;
    fill: tomato;
  }
  & .human-body {
    position: absolute;
    top: 115px;
  }

  & svg:hover {
    cursor: pointer;
    stroke: blue;
  }

  & svg:hover path {
    fill: #ff7d16;
  }

  & svg {
    fill: #a06d69;
  }
`;
