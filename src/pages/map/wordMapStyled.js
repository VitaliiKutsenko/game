import styled from 'styled-components';

export const WorldMapWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  .mapWrapper {
    position: relative;
    overflow-y: auto;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    min-width: 500px;
    & svg {
      overflow: auto;

      & path:hover {
        fill: gray;
        opacity: 1;
      }
    }
  }
`;
