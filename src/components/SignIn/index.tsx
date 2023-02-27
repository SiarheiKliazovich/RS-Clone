import { FunctionComponent } from "react";
import FormSignIn from "../FormSignIn";

import "./signin.scss";

const SignIn: FunctionComponent = () => (
  <div className="sign__wrapper">
    <div className="sign__image">
      <div className="image-wrapper"></div>
    </div>
    <div className="sign__content-wrapper">
      <FormSignIn />
    </div>
  </div>
);

export default SignIn;
