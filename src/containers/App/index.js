/* @flow */
// Dependencies
import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { isEmpty } from "lodash"
// Components
import Button from "../../components/atoms/Button";
import InputField from "../../components/molecules/InputField";
import Select from "../../components/molecules/Select";
import Checkbox from "../../components/molecules/Checkbox";
import Layout from "../../components/templates/Layout";
import LatestResults from "../../components/templates/LatestResults";
import HistoricalResults from "../../components/templates/HistoricalResults";
// Helpers
import { today } from "../../helpers/date";
import { sourceOptions, targetOptions } from "../../helpers/mappers";
// Constants
import { dataType } from "../../constants/dataType";
// Selectors
import { targetsSelector, currenciesProcessedSelector,
  fluctuationSelector,
} from "../../selectors";
//Actions
import {
  changeCheck, changeAmount, chooseTarget,
  chooseSource, submit, removeTarget, changeDate,
} from "../../actions";
// Types
import type { Check } from "../../types/models";
import type {
  ChangeCheckRequestedEvent, ChangeAmountEvent,
  ChooseSourceEvent, RemoveTargetEvent,
  SubmitRequestedEvent, ChooseTargetEvent,
  ChangeDateEvent,
} from "../../types/actions";

type State = {|
  isDirty: boolean,
|}

type Props = {|
  +amount: string,
  +changeAmount: (value: string) => ChangeAmountEvent,
  +changeCheck: (check: string) => ChangeCheckRequestedEvent,
  +changeDate: (name: string, value: string) => ChangeDateEvent,
  +check: Check,
  +chooseSource: (source: string) => ChooseSourceEvent,
  +chooseTarget: (currency: string) => ChooseTargetEvent,
  +currenciesProcessed: Array<{ value: string, key: string }>,
  +dateFrom: string,
  +dateTo: string,
  +fluctuation: Array<{key: string, fluctuation: string}>,
  +removeTarget: (currency: string) => RemoveTargetEvent,
  +source: string,
  +submit: () => SubmitRequestedEvent,
  +targets: string,
|}

class App extends PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      isDirty: false,
    }
  }
  _onCheck = (event: any): void => {
    const { changeCheck } = this.props;
    const name = event.target.name;

    changeCheck(name);
    this.setState({ isDirty: true });
  }

  _onChange = (event: any): void => {
    const { changeAmount } = this.props;
    const value = event.target.value;

    changeAmount(value);
    this.setState({ isDirty: true });
  }

  _onSourceSelect = (option): void => {
    const { chooseSource } = this.props;
    const { value } = option;

    chooseSource(value);
  }

  _onTargetRemove = (option): void => {
    const { removeTarget } = this.props;
    const { value } = option;

    removeTarget(value);
    this.setState({ isDirty: true });
  }

  _onTargetSelect = (option): void => {
    const { chooseTarget } = this.props;
    const { value } = option;

    chooseTarget(value);
  }

  _onDateChange = (event: any): void => {
    const { changeDate } = this.props;
    const value = event.target.value;
    const name = event.target.name;

    changeDate(name, value);
  }

  _onSubmit = (): void => {
    const { submit } = this.props;

    submit();
    this.setState({ isDirty: false });
  }

  get isHistorical(): boolean {
    const { check } = this.props;

    return check === dataType.HISTORICAL;
  }

  get isLatest(): boolean {
    const { check } = this.props;

    return check === dataType.LATEST;
  }

  render() {
    const { isDirty } = this.state;
    const {
      check, amount, targets,
      submit, dateFrom, dateTo,
      source, currenciesProcessed,
      fluctuation } = this.props;

    const showLatestResults =
      this.isLatest &&
      !isEmpty(amount) &&
      !isEmpty(currenciesProcessed) &&
      !isDirty;

    const showHistoricalResults =
      this.isHistorical &&
      !isEmpty(amount) &&
      !isEmpty(fluctuation) &&
      !isDirty;

    return (
      <Layout
        showDates={this.isHistorical}
        showLatestResults={showLatestResults}
        showHistoricalResults={showHistoricalResults}
        latestResults={
          <LatestResults
            amount={amount}
            source={source}
            currenciesProcessed={currenciesProcessed}
          />}
        historicalResults={
          <HistoricalResults
            amount={amount}
            source={source}
            fluctuation={fluctuation}
          />
        }
        latest={
          <Checkbox
            label="Latest currency converter"
            name="latest"
            onChange={this._onCheck}
            value={this.isLatest}
          />}
        historical={
          <Checkbox
            label="Historical changes for currencies"
            name="historical"
            onChange={this._onCheck}
            value={this.isHistorical}
          />}
        amount={
          <InputField
            label="Amount"
            name="amount"
            onChange={this._onChange}
            readOnly={this.isHistorical}
            value={amount}
          />}
        from={
          <Select
            label="Source"
            name="source"
            onChange={this._onSourceSelect}
            options={sourceOptions}
            selected={source}
          />}
        to={
          <Select
            label="Targets"
            name="targets"
            onChange={this._onTargetSelect}
            onRemove={this._onTargetRemove}
            options={targetOptions}
            selected={targets}
          />}
        dateFrom={
          <InputField
            label="Amount"
            max={today}
            name="dateFrom"
            onChange={this._onDateChange}
            required
            type="date"
            value={dateFrom}
          />}
        dateTo={
          <InputField
            label="Amount"
            max={today}
            name="dateTo"
            onChange={this._onDateChange}
            required
            type="date"
            value={dateTo}
          />}
        submit={<Button onClick={this._onSubmit}>Submit</Button>}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { check, amount, dateFrom, dateTo, source } = state.appReducer;
  const targets = targetsSelector(state);
  const currenciesProcessed = currenciesProcessedSelector(state);
  const fluctuation = fluctuationSelector(state);

  return {
    amount,
    check,
    currenciesProcessed,
    dateFrom,
    dateTo,
    fluctuation,
    source,
    targets,
  }
}

export default connect(mapStateToProps, {
  changeAmount,
  changeCheck,
  changeDate,
  chooseTarget,
  chooseSource,
  removeTarget,
  submit,
})(App);
