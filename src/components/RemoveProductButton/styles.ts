import styled from 'styled-components';

export const RemoveProductButtonContainer = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme['purple']};
  }
`;
