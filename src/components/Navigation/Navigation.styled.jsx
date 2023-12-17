import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const LinkStyled = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;
