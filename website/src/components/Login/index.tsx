import React, { FC } from "react";
import { useState } from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dispatcher } from "../../redux/reducer";
import { setLogin, SetLogin } from "../../redux/reducers/login";

interface DispatchProps {
  setLogin: (payload: {}) => SetLogin;
}
const mapDispatchToProps = (dispatch: Dispatcher) =>
  bindActionCreators({ setLogin }, dispatch);
const Login: FC<{} & DispatchProps> = ({ children, setLogin }) => {
  const [isSignIn, setSignIn] = useState(false);
  const isLoginResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): response is GoogleLoginResponse =>
    (response as GoogleLoginResponse).googleId !== undefined;
  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("SUCCESS");
    setSignIn(true);
    const r = isLoginResponse(response) ? response.profileObj.email : response;
    console.log("EMAIL", r);
    setLogin(response);
  };
  const onFailure = (error: any) => {
    console.log("ERROR");
  };
  return (
    <>
      {isSignIn ? (
        <GoogleLogin
          clientId="185204078816-12higau5sbopv184as7l0mmd1g7qugsr.apps.googleusercontent.com" // TO BE CREATED
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={false}
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default connect(null, mapDispatchToProps)(Login);
