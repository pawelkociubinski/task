/* @flow */
import React from "react";
import { ThemeProvider } from "styled-components";

import themes, { StyledLabel } from "./styles";
import type { Theme } from "./types";

type Props = {
  theme: Theme,
  children: string
};

const Label = (props: Props) => {
  const { children, theme } = props;
  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledLabel>{children}</StyledLabel>
    </ThemeProvider>
  );
};

export default Label;
