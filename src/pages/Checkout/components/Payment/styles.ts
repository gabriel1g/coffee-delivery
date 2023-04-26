import styled from 'styled-components';

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .top {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${({ theme }) => theme['purple']};
    }

    div {
      h3 {
        color: ${({ theme }) => theme['base-subtitle']};
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.3rem;
      }

      p {
        font-size: 0.875rem;
        line-height: 1.5rem;
      }
    }
  }

  .boxes {
    display: flex;
    gap: 0.75rem;

    .payment_method {
      width: 11.25rem;
      padding: 1rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme['base-button']};
      display: flex;
      gap: 0.75rem;
      align-items: center;

      svg {
        color: ${({ theme }) => theme['purple']};
      }

      span {
        font-size: 0.75rem;
        text-transform: uppercase;
      }
    }
  }
`;
