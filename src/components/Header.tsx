import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.light};
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.9;
  transition: opacity 0.2s ease;
  font-weight: 500;
  
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Poëzie Dagboek</Logo>
      <Nav>
        <NavLink href="/">Start</NavLink>
        <NavLink href="/about">Over</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;