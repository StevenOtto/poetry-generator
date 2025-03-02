import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {/* <Header /> */}
      <Main>{children}</Main>
      {/* <Footer /> */}
    </LayoutContainer>
  );
};

export default Layout;
