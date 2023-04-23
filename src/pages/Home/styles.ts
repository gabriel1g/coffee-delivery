import styled from 'styled-components';

export const HomeContainer = styled.div`
  .top {
    padding: 4rem 0;
    display: flex;
    justify-content: space-between;

    .col {
      h1 {
        color: ${({ theme }) => theme['base-title']};
        font-size: 3rem;
        line-height: 130%;
      }

      p {
        margin-top: 1rem;
        color: ${({ theme }) => theme['base-subtitle']};
        font-size: 1.25rem;
      }

      .grid {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.25rem;

        .grid-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;

          .icon {
            padding: 0.5rem;
            border-radius: 50%;
            color: ${({ theme }) => theme.white};
            display: flex;
            align-items: center;
          }

          &:nth-child(1) .icon {
            background-color: ${({ theme }) => theme['yellow-dark']};
          }

          &:nth-child(2) .icon {
            background-color: ${({ theme }) => theme['base-text']};
          }

          &:nth-child(3) .icon {
            background-color: ${({ theme }) => theme['yellow']};
          }

          &:nth-child(4) .icon {
            background-color: ${({ theme }) => theme['purple']};
          }
        }
      }
    }
  }
`;
