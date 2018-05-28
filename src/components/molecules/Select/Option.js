/* @flow */
// Dependencies
import React, { Component } from "react";
// Types
import type { Option as OptionType } from "./types";
// Custom
import { Cell, Label } from "./styles";

type Props = {
  +option: OptionType,
  +isSelected: boolean,
  +handleSelect: (option: OptionType) => void,
  +handleRemove?: (option: OptionType) => void,
}

class Option extends Component<Props> {
  _handleSelect = (): void => {
    const { isSelected, handleSelect, option, handleRemove } = this.props;

    if (handleRemove && isSelected) {
      handleRemove(option);
    } else {
      handleSelect(option);
    }
  }

  render() {
    const { isSelected, option } = this.props;
    return (
      <Cell
        isSelected={isSelected}
        onClick={this._handleSelect}
      >
        <Label>{option.label}</Label>
      </Cell>
    );
  }
}

export default Option;
