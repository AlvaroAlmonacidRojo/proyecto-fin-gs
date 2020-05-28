import CircularProgress from "@material-ui/core/CircularProgress";
import React, { Fragment, ReactNode, useEffect, useState } from "react";

import { DataState } from "../../redux/reducers/dataState";

export interface GenericDataProps<T> {
  dataFetcher?: () => void;
  children: (data: T) => ReactNode;
  data: DataState<T>;
  loadingElement?: ReactNode;
  errorElement?: ReactNode;
}
export function GenericDataContainer<T>({
  data,
  children,
  dataFetcher,
  loadingElement = <CircularProgress color="secondary" size={24} />
}: GenericDataProps<T>) {
  useEffect(() => {
    if (dataFetcher) {
      dataFetcher();
    }
  }, [dataFetcher]);

  const [throwError, setThrowError] = useState(false);

  let element: {} | null | undefined = null;

  switch (data.state) {
    case "PENDING":
      if (!throwError) {
        setThrowError(true);
      }

      element = loadingElement;
      break;

    case "READY":
      element = children(data.data);
      break;

    case "ERROR":
      if (throwError) {
        throw data.error;
      }
      break;
  }
  return <Fragment>{element}</Fragment>;
}

export default GenericDataContainer;
