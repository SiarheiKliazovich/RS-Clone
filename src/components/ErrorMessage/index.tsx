import { FunctionComponent } from "react";

import img from "../../assets/images/jpg/error.jpg";

const ErrorMessage: FunctionComponent = () => {
  return (
    <img
      style={{
        display: "block",
        width: "300px",
        height: "300px",
        objectFit: "contain",
        margin: "50px auto",
      }}
      src={img}
      alt="Error"
    />
  );
};

export default ErrorMessage;
