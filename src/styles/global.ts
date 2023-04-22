import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme['background']};
    color: ${({ theme }) => theme['base-text']}
  }

  body, input, textarea, button {
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2';
    font-weight: bold;
  }

  :focus {
    outline: none;
  }
`;
