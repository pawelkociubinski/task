/* @flow */
// Dependencies
import React from "react";
import invariant from "invariant";
// Custom
import * as definitions from "./definitions";

type Props = {
  size?: number,
  icon: string,
  className?: string,
};

const Icons = (props: Props) => {
  const { size, icon, className } = props;
  const iconDefinition = definitions[icon];

  invariant(iconDefinition, `There is no icon named ${icon} defined`);

  return (
    <svg
      className={className}
      height={size}
      width={size}
      viewBox="0 0 40 40"
    >
      {iconDefinition.map((d) => <path key={d} d={d} />)}
    </svg>
  );
};

Icons.defaultProps = {
  size: 10,
  className: '',
};

export default Icons;
