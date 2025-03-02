import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Poëzie Dagboek. Alle rechten voorbehouden.</FooterText>
    </FooterContainer>
  );
};

export default Footer;