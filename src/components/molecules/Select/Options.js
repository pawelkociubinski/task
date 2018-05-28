/* @flow */
// Dependencies
import React from "react";
// Types
import type { Option as OptionType } from "./types";
// Custom
import Option from "./Option";
import { Dropdown } from "./styles";

type Props = {
  +options: Array<OptionType>,
  +isSelected: (optionValue: string) => boolean,
  +handleSelect: (option: OptionType) => void;
  +handleRemove?: (option: OptionType) => void;
}

const Options = (props: Props) => {
  const { options, handleSelect, handleRemove } = props;
  return (
    <Dropdown>
      {options.map((option) => {
        const isSelected = props.isSelected(option.value);
        return (
          <Option
            handleSelect={handleSelect}
            handleRemove={handleRemove}
            isSelected={isSelected}
            key={option.value}
            option={option}
          />
        );
      })}
    </Dropdown>
  );
};

export default Options;
