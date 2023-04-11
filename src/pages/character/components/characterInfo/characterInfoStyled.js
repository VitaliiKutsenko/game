import styled from 'styled-components';
import { BaseParamsWrapper } from '../../../skills/baseParams/baseParamsStyled';

export const CharacterInfoWrapper = styled(BaseParamsWrapper)`
  grid-area: avatar;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
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
