import styled from 'styled-components';

export const BattleLogListWrapper = styled.div`
  ${({ type }) =>
    type === 'user'
      ? {
          background: 'green',
          alignSelf: 'flex-start',
        }
      : {
          background: 'tomato',
          alignSelf: 'flex-end',
        }};
  box-shadow: 0 0 1px 1px black;
  border-radius: 6px;
  padding: 5px;
  width: 80%;
`;
