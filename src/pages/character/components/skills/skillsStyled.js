import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  grid-area: skills;
  width: 100%;
  height: 100%;
  background: ${({ color }) => (color ? color : 'white')};
  border-radius: 10px;
  box-shadow: 0 0 4px 1px gray;
  display: flex;
  flex-direction: column;
  position: relative;
  & h3 {
    z-index: 1;
  }
  &:before {
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
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
  }

  & h3 {
    align-self: center;
    margin: 5px;
  }
`;
