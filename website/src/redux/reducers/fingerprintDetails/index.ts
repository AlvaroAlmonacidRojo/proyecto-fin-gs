import { GetFingerprintResponse } from "../../../../../types/build/fingerprint";

import { ThunkResult } from "../../reducer";
import dataStateReducer, { dataFetcher, DataState } from "../dataState";

export const FINGERPRINT_DETAILS = "FINGERPRINT_DETAILS";

export type FINGERPRINT_DETAILS = typeof FINGERPRINT_DETAILS;

export type FingerprintDetails = GetFingerprintResponse;

export type DefaultState = DataState<GetFingerprintResponse["data"]>;

export type GetFingerprintDetails = ThunkResult<Promise<FingerprintDetails>>;

const defaultLink = "api/fingerprint";

export const getFingerprintDetails = (
  userId: string,
  forceRefresh: boolean = false
): GetFingerprintDetails => {
  const url = `${defaultLink}/${userId}`;
  return dataFetcher(url, FINGERPRINT_DETAILS, "fingerprintDetails", {
    forceRefresh
  });
};

const reducer = dataStateReducer<DefaultState, FINGERPRINT_DETAILS>(
  FINGERPRINT_DETAILS
);

export default reducer;
