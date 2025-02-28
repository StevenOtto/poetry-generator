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
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.light};
  opacity: 0.9;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Weather Poetry</Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;