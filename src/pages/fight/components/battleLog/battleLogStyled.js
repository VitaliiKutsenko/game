import styled from 'styled-components';

export const BattleLogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 40%;
  box-shadow: 0 0 3px 2px black;
  border-radius: 6px;
  padding: 5px;
  gap: 20px;
  width: 100%;
  overflow: auto;

  & .log-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
  }
`;
