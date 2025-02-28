import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-size: 16px;
    min-height: 100vh;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
  
  input, textarea {
    font-family: inherit;
  }
`;