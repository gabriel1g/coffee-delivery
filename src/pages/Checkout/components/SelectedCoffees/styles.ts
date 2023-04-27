import styled from 'styled-components';

export const SelectedCoffeesContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 46px;
  background-color: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .cart_products {
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      li {
        padding-bottom: 1.5rem;
        border-bottom: 1px solid ${({ theme }) => theme['base-button']};
        display: flex;
        justify-content: space-between;

        .item_box {
          display: flex;
          gap: 1.25rem;

          img {
            height: 4rem;
            width: 4rem;
          }

          .box {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            h4 {
              color: ${({ theme }) => theme['base-subtitle']};
              font-family: 'Roboto';
              font-size: 1rem;
            }

            .buttons {
              display: flex;
              gap: 0.5rem;
            }
          }
        }

        .price {
          font-weight: bold;
        }
      }
    }
  }

  .total {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .values {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .expenseTotal {
        font-size: 0.875rem;
        display: flex;
        justify-content: space-between;

        .price {
          font-size: 1rem;
        }
      }

      .cartTotal {
        color: ${({ theme }) => theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
      }
    }

    .confirm_order {
      padding: 0.75rem;
      border: none;
      border-radius: 6px;
      background-color: ${({ theme }) => theme['yellow']};
      color: ${({ theme }) => theme['white']};
      font-size: 0.875rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
