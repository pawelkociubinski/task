import styled from 'styled-components';

export default {
  primary: {
    backgroundColor: '#DDDDDD',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
};

const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: #707070;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  outline: none;
  overflow: hidden;
  position: relative;
  border: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const RectangularButton = Button.extend`
  padding: 0 40px;
`;

export const CircleButton = Button.extend`
  border-radius: 24px;
  padding: 0;
  width: 48px;
`;
