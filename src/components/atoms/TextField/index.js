/* @flow */
// Dependencies
import React from "react";
import { noop } from "lodash";
// Styles
import { StyledTextField } from "./styles";

type Props = {|
  +max?: string,
  +name: string,
  +onBlur: () => void,
  +onChange?: (event: Event) => void,
  +onFocus: () => void,
  +readOnly?: boolean,
  +required: boolean,
  +type: string,
  +value: string,
|};

const TextField = (props: Props) => {
  const {
    onBlur, onChange, onFocus, readOnly, value, type, name, required, max,
  } = props;

  return (
    <StyledTextField
      name={name}
      max={max}
      required={required}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      readOnly={readOnly}
      type={type}
      value={value}
    />
  );
};

TextField.defaultProps = {
  readOnly: false,
  onChange: noop,
};

export default TextField;
