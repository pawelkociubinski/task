/* @flow */
// Dependencies
import React, { Component } from "react";
import { isEmpty } from "lodash";
import type { Node } from "react";
// Components
import Label from "../../atoms/Label";
import TextField from "../../atoms/TextField";
// Styles
import { Container, Elevator, Wrapper, CoverLayer } from "./styles";

type Props = {|
  +icon?: Node,
  +label: string,
  +max?: string,
  +name: string,
  +onChange?: (event: Event) => void,
  +readOnly?: boolean,
  +required: boolean,
  +type: string,
  +value: string,
|};

type State = {|
  active: boolean,
|};

class InputField extends Component<Props, State> {
  static defaultProps = {
    type: "text",
    required: false,
  };

  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  _handleBlur = (): void => {
    this.setState({ active: false });
  };

  _handleFocus = (): void => {
    this.setState({ active: true });
  };

  render() {
    const {
      value, onChange, readOnly, label, icon, type, name, required, max,
    } = this.props;
    const { active } = this.state;

    return (
      <Container>
        <Elevator lifted={active || !isEmpty(value)}>
          <Label theme={active ? "active" : "default"}>{label}</Label>
        </Elevator>
        <Wrapper>
          <TextField
            name={name}
            max={max}
            required={required}
            onBlur={this._handleBlur}
            onChange={onChange}
            onFocus={this._handleFocus}
            readOnly={readOnly}
            type={type}
            value={value}
          />
          <CoverLayer active={active} />
        </Wrapper>
        {icon}
      </Container>
    );
  }
}

export default InputField;
