import styled from 'styled-components';

export const ProductsNumberContainer = styled.div`
  width: 5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  display: flex;
  gap: 0.25rem;

  span {
    width: 100%;
    color: ${({ theme }) => theme['base-title']};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme['purple']};
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
