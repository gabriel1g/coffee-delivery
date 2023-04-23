import styled from 'styled-components';

export const ProductsNumberContainer = styled.div`
  width: 5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  display: flex;
  gap: 0.25rem;

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme['base-title']};
    text-align: center;

    &::-webkit-inner-spin-button {
      all: unset;
    }
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
