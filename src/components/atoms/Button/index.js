/* @flow */
// Dependencies
import type { Node } from "react";
import React from "react";
import { noop } from "lodash";
import { ThemeProvider } from "styled-components";
// Custom
import themes, { CircleButton, RectangularButton } from "./styles";

const ButtonComponents = {
  circle: CircleButton,
  rectangle: RectangularButton,
};

type Props = {|
  +children: Node,
  +onClick: () => void,
  +shape: string,
  +theme: string,
|}

const Button = (props: Props) => {
  const {
    children, shape, onClick, theme,
  } = props;

  const ButtonComponent = ButtonComponents[shape];
  return (
    <ThemeProvider theme={themes[theme]}>
      <ButtonComponent onClick={onClick}>
        {children}
      </ButtonComponent>
    </ThemeProvider>
  );
};

Button.defaultProps = {
  shape: "rectangle",
  theme: "primary",
  onClick: noop,
};

export default Button;
