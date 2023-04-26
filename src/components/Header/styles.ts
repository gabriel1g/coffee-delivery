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
      border-radius: 6px;
      background-color: ${({ theme }) => theme['yellow-light']};
      display: flex;
      align-items: center;
      position: relative;

      a {
        padding: 0.5rem;
        color: ${({ theme }) => theme['yellow-dark']};
      }

      span {
        padding: 0.2rem 0.4rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme['yellow-dark']};
        color: ${({ theme }) => theme['white']};
        font-size: 0.75rem;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
      }
    }
  }
`;
