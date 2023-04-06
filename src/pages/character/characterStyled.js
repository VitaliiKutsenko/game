import styled from 'styled-components';

export const CharacterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-areas:
    ' avatar param param '
    'baseParams baseParams baseParams'
    ' skills skills skills';
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 0.5fr 1fr 2fr;
  justify-content: center;
  align-items: start;
  grid-gap: 10px;
`;
