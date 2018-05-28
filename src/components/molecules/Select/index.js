/* @flow */
// Dependencies
import React, { Component } from "react";
import { isEqual, isArray, join, includes } from "lodash";
// Types
import type { Option } from "./types";
// Custom
import InputField from "../InputField";
import Options from "./Options";
import { Container, IconWrapper } from "./styles";

type Props = {|
  +label: string,
  +name: string,
  +onChange: (option: Option) => void,
  +onRemove?: (option: Option) => void,
  +options: Array<Option>,
  +readonly: boolean,
  +selected: string,
|}

type State = {
  isOpen: boolean,
}

class Select extends Component<Props, State> {
  node: HTMLDivElement

  static defaultProps = {
    readonly: false,
  };

  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this._handleMouseClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this._handleMouseClickOutside);
  }

  nodeRef = (node: HTMLDivElement): void => { this.node = node; };

  _handleMouseClickOutside = (event: any): void => {
    if (this.node.contains(event.target)) { return; }

    this.setState({ isOpen: false });
  }

  _handleSwitch = (): void => {
    const { readonly } = this.props;
    const { isOpen } = this.state;

    if (readonly) { return; }

    this.setState({ isOpen: !isOpen });
  }

  _isSelected = (optionValue: string): boolean => includes(this.props.selected, optionValue)

  render() {
    const { onChange, onRemove, options, label, selected, name } = this.props;
    const { isOpen } = this.state;

    return (
      <Container
        innerRef={this.nodeRef}
        onClick={this._handleSwitch}
      >
        <InputField
          label={label}
          readOnly
          name={name}
          value={selected}
          icon={
            <IconWrapper
              icon="arrowTop"
              isOpen={isOpen}
              size={15}
            />
          }
        />
        {isOpen &&
          <Options
            handleSelect={onChange}
            handleRemove={onRemove}
            isSelected={this._isSelected}
            options={options}
          />
        }
      </Container>
    );
  }
}

export default Select;
