// styles.ts
import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled?: boolean }>(({ disabled }) => `
  background-color: ${disabled ? '#ccc' : '#007bff'};
  color: ${disabled ? '#666' : 'white'};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background-color: ${disabled ? '#ccc' : '#0056b3'};
  }
`);