/* @flow */
// Dependencies
import React from "react";
// Components
import Label from "../../atoms/Label";
// Styles
import { Box, Check, Container, Input } from "./styles";

type Props = {|
  +label: string,
  +name: string,
  +onChange: (event: any) => void,
  +value: boolean,
|}

const Checkbox = (props: Props) => {
  const { label, value, onChange, name } = props;
  return (
    <Container>
      <Box>
        <Input
          checked={value}
          name={name}
          onChange={onChange}
          type="checkbox"
        />
        {value &&
          <Check
            checked={value}
            icon="check"
            size={20}
          />}
      </Box>
      <Label theme="default">{label}</Label>
  </Container>
  )
};

export default Checkbox;
