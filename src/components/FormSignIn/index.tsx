import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { IUser } from "../../interfaces/user";
import { login } from "../../services/apiAuth";
import { authorization } from "../../actions";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";

const FormSignIn: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [isSpiner, setIsSpiner] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setError(""), 5000);
  }, [error]);

  const { t } = useTranslation("dataLang");

  const click = async (body: Pick<IUser, "email" | "password">) => {
    try {
      setIsSpiner(true);
      const data = await login(body);
      if (data) {
        dispatch(authorization(data, true));
        if (data.role === "ADMIN" || data.role === "MANAGER") {
          setTimeout(() => navigate("/dashboard"), 3000);
        } else {
          setTimeout(() => navigate("/"), 3000);
        }
      }
    } catch (e) {
      setIsSpiner(false);
      setError(e as string);
    }
  };

  const interfaceSettings = useSelector((state: IStore) => state.appInterface);

  const { accentColor, isNavbarNightMode } = interfaceSettings;
  const backgroundColor = nightTheme.background.element;

  return (
    <div className="sign__content">
      <h2 className="sign__title">{t("sign.signIn")}</h2>
      <div className="sign__text">{t("sign.text-1")}</div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Incorrect email")
            .required("Required field"),
          password: Yup.string()
            .min(4, "Minimum 4 symbols")
            .max(10, "Maximum 10 symbols")
            .required("Required field"),
        })}
        onSubmit={(values) => {
          click(values);
        }}
      >
        <Form className="form">
          <Field
            className="field"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage className="error" name="email" component="div" />
          <Field
            className="field"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage className="error" name="password" component="div" />
          <button
            style={{
              backgroundColor: isNavbarNightMode
                ? backgroundColor
                : accentColor.static,
            }}
            className="sign__button"
            type="submit"
          >
            {t("sign.signIn")}
          </button>
          {isSpiner && <span className="sign-spiner"></span>}
          {error && (
            <div className="error-tooltip">
              <i className="fa fa-warning" /> {error}
            </div>
          )}
        </Form>
      </Formik>
      <div className="sign__text-link">
        {t("sign.create")}{" "}
        <Link
          style={{
            color: isNavbarNightMode ? backgroundColor : accentColor.static,
          }}
          className="text-link"
          to="/sign-up"
        >
          {t("sign.signUp")}
        </Link>
      </div>
    </div>
  );
};

export default FormSignIn;
