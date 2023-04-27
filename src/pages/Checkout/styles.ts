import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 2.5rem 0;
  display: flex;
  gap: 2rem;

  .col {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:last-child {
      flex-grow: 1;
    }

    h2 {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.125rem;
    }

    & > .boxes {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }
`;
