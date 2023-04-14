import styled from 'styled-components';

export const BotFightWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  & .bot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 200px;
    height: 100%;
  }
`;
