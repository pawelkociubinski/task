// Dependencies
import React, { Fragment } from "react";
// Components
import Icon from "../../atoms/Icon";
// Custom
import { Container, Source, Span, Target } from "./styles";

type Props = {}

const LatestResults = (props: Props) => {
  const { amount, source, currenciesProcessed } = props;

  return (
    <Container>
      <Source>{amount} <Span>{source}</Span></Source>
      <Icon icon="arrowRight" size={40} />
      <div>{currenciesProcessed.map((v) =>
        <Target key={v.key}>{v.value} <Span>{v.key}</Span></Target>)}</div>
    </Container>
  );
};

export default LatestResults;
