import styled from 'styled-components';

export const DeliveryAddressFormContainer = styled.div`
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
      color: ${({ theme }) => theme['yellow-dark']};
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

  form {
    display: grid;
    gap: 1rem;

    [class^='row'] {
      display: grid;
      gap: 0.75rem;

      input {
        padding: 0.75rem;
        border: 1px solid ${({ theme }) => theme['base-button']};
        border-radius: 4px;
        background-color: ${({ theme }) => theme['base-input']};
      }
    }

    .row-1 {
      grid-template-columns: 0fr;
    }

    .row-2 {
      grid-template-columns: 1fr;
    }

    .row-3 {
      grid-template-columns: 0fr 1fr;
    }

    .row-4 {
      grid-template-columns: 0fr 1fr 3.75rem;
    }
  }
`;
