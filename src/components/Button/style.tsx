import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ButtonStyleProps } from './type';

const StyledButton = styled.button<ButtonStyleProps>`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${({ mode }) => {
    switch (mode) {
      case 'primary':
        return css`
          color: '#000';
          background-color: #1ea7fd;
        `;
      case 'secondary':
        return css`
          color: #333;
          background-color: transparent;
        `;
      default:
        console.log('error');
    }
  }};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 0.75rem;
          padding: 0.625rem 1rem;
        `;
      case 'medium':
        return css`
          font-size: 0.875rem;
          padding: 0.75rem 1.25rem;
        `;
      case 'large':
        return css`
          font-size: 1rem;
          padding: 0.75rem 1.5rem;
        `;
      default:
        console.log('error');
    }
  }};
`;

export { StyledButton };
