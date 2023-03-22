import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  border-radius: 6px;
  background: rgba(153, 149, 149, 0.2);

  & .load-wrapper {
    gap: 20px;
    display: flex;
  }
`;
