import React from "react";
import Spinner from "../Spinner/Spinner";

//! Higher Order Component, receives a component and returns a components

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default WithSpinner;

/* Another way of writting:

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  } 
  return Spinner;
}

*/
