import styled from 'styled-components';
import { BaseParamsWrapper } from '../baseParams/baseParamsStyled';

export const BaseOptionsWrapper = styled(BaseParamsWrapper)`
  grid-area: param;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & h3 {
    align-self: center;
    margin: 5px;
  }
`;

export const BaseOptionsListWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 60px;
  }
`;
