import styled from 'styled-components';

export const LoadFromJSONWrapper = styled.div`
  position: relative;

  & .load-file,
  .load-confirm {
    display: flex;
    text-transform: capitalize;
    border: none;
    background: coral;
    border-radius: 6px;
    font-size: 16px;
    padding: 5px;
    width: fit-content;

    & input {
      position: absolute;
      visibility: hidden;
    }
  }

  & .load-confirm {
    cursor: pointer;
    position: absolute;
    top: 120%;
    background: rgba(0, 128, 0, 0.67);
    //right: -120%;
    width: fit-content;
    height: 100%;
  }
`;
