import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;

  img {
    height: 2.5rem;
    width: 5.3125rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    .location {
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme['purple-light']};
      color: ${({ theme }) => theme['purple-dark']};
      display: flex;
      align-items: center;
    }

    .shopping_cart {
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme['yellow-light']};
      color: ${({ theme }) => theme['yellow-dark']};
      display: flex;
      align-items: center;
    }
  }
`;
