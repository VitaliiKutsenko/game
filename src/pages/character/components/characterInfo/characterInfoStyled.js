import styled from 'styled-components';
import { BaseParamsWrapper } from '../baseParams/baseParamsStyled';

export const CharacterInfoWrapper = styled(BaseParamsWrapper)`
  grid-area: avatar;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-direction: row-reverse;
  & span {
  }
  & svg {
    max-width: 100px;
    max-height: 100px;
    box-shadow: 0 0 3px 1px black;
    border-radius: 10px;
    padding: 10px;
  }
  & h2 {
    border-radius: 10px;
    padding: 5px 10px;
    width: fit-content;
    text-align: center;
    box-shadow: 0 0 3px 1px black;
  }
`;
