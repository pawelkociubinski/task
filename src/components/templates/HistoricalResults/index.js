// Dependencies
import React, { Fragment } from "react";
// Components
import Icon from "../../atoms/Icon";
// Custom
import { Container, Source, Span, Target } from "./styles";

type Props = {}

const HistoricalResults = (props: Props) => {
  const { amount, source, fluctuation } = props;

  return (
    <Container>
      <Source><Span>{source}</Span></Source>
      <Icon icon="arrowRight" size={40} />
      <div>{fluctuation.map((v) =>
        <Target key={v.key}>
          <Span>{v.key}</Span> {v.fluctuation}</Target>)}
      </div>
    </Container>
  );
};

export default HistoricalResults;
