import React, { FC, useState } from "react";
import { connect } from "react-redux";
import {
  DefaultState as FingerprintDefaultState,
  getFingerprintDetails
} from "../../redux/reducers/fingerprintDetails";

import moment from "moment";
import DataContainer from "../../components/DataContainer";
import HomeComponent from "../../components/Home";
import actionDispatcher from "../../redux/actionDispatcher";
import { Dispatcher } from "../../redux/reducer";
import { AppState } from "../../redux/state";

interface StateProps {
  fingerprintDetails: FingerprintDefaultState;
}

interface DispatchProps {
  dispatchGetFingerprintDetails: (
    userId: string,
    refresh: boolean
  ) => () => void;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
  fingerprintDetails: state.fingerprintDetails
});

const mapDispatchToProps = (dispatch: Dispatcher): DispatchProps => ({
  dispatchGetFingerprintDetails: actionDispatcher(
    getFingerprintDetails,
    dispatch
  )
});
const InternalComponent: FC<Props> = ({
  fingerprintDetails,
  dispatchGetFingerprintDetails
}) => {
  const defaultDate = moment()
    .format("YYYY-MM-DD")
    .toString();
  const [date, setDate] = useState(defaultDate);
  const handleDateChange = (date: string) => setDate(date);
  return (
    <DataContainer
      data={fingerprintDetails}
      dataFetcher={dispatchGetFingerprintDetails(
        `67390d41-a0f6-46e2-b1f7-935f6ca9cc3d?date=${date}`,
        true
      )}
    >
      {data => (
        <HomeComponent
          fingerprint={data}
          handleDateChange={handleDateChange}
          date={date}
        />
      )}
    </DataContainer>
  );
};

export const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalComponent);
