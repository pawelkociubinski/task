/* @flow */
// Dependencies
import React, { Fragment } from "react";
// Custom
import { Container, Wrapper, Amount, From, To } from "./styles";

type Props = {|
  amount: React$Node,
  dateFrom: React$Node,
  dateTo: React$Node,
  from: React$Node,
  historical: React$Node,
  historicalResults: React$Node,
  latest: React$Node,
  latestResults: React$Node,
  showDates: boolean,
  showHistoricalResults: boolean,
  showLatestResults: boolean,
  submit: React$Node,
  to: React$Node,
|}

const Layout = (props: Props) => {
  const {
    latest,
    historical,
    amount,
    from, to, submit,
    showDates,
    dateFrom,
    dateTo,
    showLatestResults,
    latestResults,
    showHistoricalResults, historicalResults,
  } = props;

  return (
    <Container>
      <div>{latest}</div>
      <div>{historical}</div>
      <Wrapper>
        <Amount>{amount}</Amount>
        <From>{from}</From>
        <To>{to}</To>
        {submit}
      </Wrapper>
      {showDates && (
        <Wrapper>
          <From>{dateFrom}</From>
          <To>{dateTo}</To>
        </Wrapper>
      )}
      {showLatestResults && latestResults}
      {showHistoricalResults && historicalResults}
    </Container>
  );
};

export default Layout;
