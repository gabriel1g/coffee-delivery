import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  height: 20rem;
  width: 16rem;
  padding: 1.25rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme['base-card']};

  .product_card {
    .thumb {
      margin-top: -3.125rem;
      display: flex;
      justify-content: center;
    }

    ul {
      margin-top: 0.75rem;
      display: flex;
      justify-content: center;
      gap: 0.25rem;

      li {
        width: fit-content;
        padding: 0.25rem 0.5rem;
        border-radius: 30px;
        background-color: ${({ theme }) => theme['yellow-light']};
        color: ${({ theme }) => theme['yellow-dark']};
        font-size: 0.625rem;
        font-weight: bold;
        list-style: none;
      }
    }

    h4 {
      margin-top: 1rem;
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.25rem;
      text-align: center;
    }

    p {
      margin-top: 0.5rem;
      color: ${({ theme }) => theme['base-label']};
      font-size: 0.875rem;
      text-align: center;
      line-height: 1.125rem;
    }

    .bottom {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .price {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        span {
          &:first-child {
            font-size: 0.875rem;
          }

          &:last-child {
            font-family: 'Baloo 2';
            font-size: 1.5rem;
            font-weight: 800;
            line-height: 1.4rem;
          }
        }
      }

      .shopping_cart {
        display: flex;
        gap: 0.5rem;

        .shopping_cart_bottom {
          padding: 0.5rem;
          border-radius: 6px;
          background-color: ${({ theme }) => theme['purple-dark']};
          color: ${({ theme }) => theme['base-card']};
          display: flex;
        }
      }
    }
  }
`;
