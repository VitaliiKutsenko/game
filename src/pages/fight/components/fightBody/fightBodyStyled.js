import styled from 'styled-components';

export const BodyWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 325px;
  border: 1px solid black;
`;
export const FightBodyWrapper = styled.div`
  position: relative;
  display: flex;
  top: -20px;

  & svg {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    fill: #dcb28e;
  }
  & svg[data-position='head'] {
    transform: translateY(20px);
  }

  & svg[data-position='cheast'] {
    top: 75px;
  }

  & svg[data-position='stomach'] {
    top: 107px;
  }

  & svg[data-position='left_hand'] {
    top: 65px;
    left: 100px;
  }

  & svg[data-position='right_hand'] {
    top: 65px;
    right: 100px;
  }

  & svg[data-position='left_leg'] {
    top: 170px;
    left: 45px;
  }

  & svg[data-position='right_leg'] {
    top: 170px;
    right: 45px;
  }

  & svg:hover {
    cursor: pointer;
    stroke: black;
  }
`;

export const FightBodyListWrapper = styled.div`
  & svg path {
    border: 1px solid black;
    fill: ${({ action, toggle }) => {
      if (action === 'attack' && toggle) {
        return 'green';
      } else if (action === 'defence' && toggle) {
        return 'grey';
      }
    }}
`;
