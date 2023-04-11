import styled from 'styled-components';
import { BaseParamsWrapper } from '../../../skills/baseParams/baseParamsStyled';

export const BaseOptionsWrapper = styled.div`
  padding: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px gray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
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
