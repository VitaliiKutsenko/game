import styled from 'styled-components';

export const CharacterCreatorWrapper = styled.div`
  display: flex;
  height: fit-content;
  background: white;
  border-radius: 6px;
  & form {
    width: 100%;
    height: 100%;
    margin: 120px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    & div {
      display: flex;
      gap: 10px;
      justify-content: flex-start;
      align-items: center;

      & input {
        outline: none;
        font-size: 16px;
        border: none;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        padding: 5px;
      }
    }
    & [type='submit'] {
      width: fit-content;
      padding: 5px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 2px 1px green;
      }
    }
  }
`;
