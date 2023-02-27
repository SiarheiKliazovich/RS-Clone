import { FunctionComponent, useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

import "./addTie.scss";
import Hover from "../Hover";
import { IStore } from "../../interfaces/store";
import { nightTheme, lightTheme } from "../../data/constants";
import addTie from "../../data/addTie";
import { createTie } from "../../services/apiTies";
import { ITie } from "../../interfaces/tie";
import { ILangReducer } from "../../interfaces/langReducer";
import {
  addTieFetching,
  addTieFetched,
  addTieFetchingError,
} from "../../actions/addTie";
import { IAddTieReducer } from "../../interfaces/addTie";
import { convertBase64 } from "../../helpers/convertBase64/convertBase64";
import Spinner from "../Spinner";

const AddTie: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode, isNightMode } = interfaceSettings;
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const list = addTie.find((c) => c.lang === lang)!;
  const [base64Image, setBase64Image] = useState<string>("");
  const [imageError, setImageError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const dispatch = useDispatch();
  const addTiesStore = useSelector(
    (state: IAddTieReducer) => state.addTieReducer
  );
  const { addTieLoadingStatus } = addTiesStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    setImageError(false);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const file = event!.target!.files![0]!;
    const base64 = (await convertBase64(file)) as string;
    setBase64Image(base64);
  };

  const createTieForm = async (formData: Pick<ITie, "name" | "price">) => {
    setImageError(!base64Image);
    if (!imageError) {
      try {
        dispatch(addTieFetching());
        const login = localStorage.getItem("login");
        const user = login ? JSON.parse(login) : [];
        const body = {
          ...formData,
          userId: user.user._id,
          image: base64Image,
        };

        const resp = await createTie(body);
        if (resp.userId) {
          dispatch(addTieFetched(resp));
          setSuccess(true);
          setTimeout(() => setSuccess(false), 10000);
        } else {
          dispatch(addTieFetchingError());
        }
      } catch (e) {
        dispatch(addTieFetchingError());
      }
    }
  };

  const isLoading = addTieLoadingStatus === "loading";

  return (
    <main className="main-market">
      <div
        className="tieaddform__wrapper"
        style={{
          backgroundColor: isNightMode
            ? nightTheme.background.page
            : lightTheme.background.page,
        }}
      >
        <div className="container">
          <div
            className="tieaddform__banner-wrapper"
            style={{
              backgroundColor: isNightMode
                ? nightTheme.background.page
                : lightTheme.background.page,
            }}
          >
            <div className="tieaddform-block" style={{ backgroundColor }}>
              <div className="form-addtie__title">{list.data.titleblock}</div>
              <div className="form-addtie__wrapper">
                <div className="form-addtie__content">
                  {isLoading && <Spinner />}
                  {!isLoading && (
                    <Formik
                      initialValues={{
                        name: "",
                        price: 0,
                      }}
                      validationSchema={Yup.object({
                        name: Yup.string().required(`${list.data.titleerror}`),
                        price: Yup.number()
                          .moreThan(0)
                          .required(`${list.data.priceerror}`),
                      })}
                      onSubmit={(values) => {
                        createTieForm(values);
                      }}
                    >
                      <Form className="tieadd-form">
                        <label htmlFor="name" className="tieadd-form__label">
                          {list.data.title}
                        </label>
                        <Field
                          className="field"
                          id="name"
                          name="name"
                          type="name"
                          placeholder="Title"
                        />
                        <ErrorMessage
                          className="error"
                          name="name"
                          component="div"
                        />
                        <label htmlFor="price" className="tieadd-form__label">
                          {list.data.pricetitle}
                        </label>
                        <Field
                          className="field"
                          id="price"
                          name="price"
                          type="number"
                          placeholder="Price"
                        />
                        <ErrorMessage
                          className="error"
                          name="price"
                          component="div"
                        />
                        <label htmlFor="image" className="tieadd-form__label">
                          {list.data.picturetitle}
                        </label>
                        <input
                          className="field-file"
                          id="image"
                          name="image"
                          type="file"
                          placeholder="image"
                          onChange={uploadImage}
                        />
                        {imageError && (
                          <p className="error">{list.data.pictureerror}</p>
                        )}
                        <Hover>
                          <button
                            style={{
                              backgroundColor: isNavbarNightMode
                                ? backgroundColor
                                : accentColor.static,
                            }}
                            className="add-tie-btn"
                            type="submit"
                          >
                            <i className="fa fa-align-justify" />
                            {list.data.btn}
                          </button>
                        </Hover>
                      </Form>
                    </Formik>
                  )}
                  {addTieLoadingStatus === "error" && (
                    <div className="error-tooltip">
                      <i className="fa fa-warning" />
                      {list.data.errortooltip}
                    </div>
                  )}
                  {success && addTieLoadingStatus === "loaded" && (
                    <div className="success-tooltip">
                      <i className="fa fa-info" />
                      {list.data.tooltip}{" "}
                      <Link to="/tie-market">{list.data.tiemarket}</Link>
                      {list.data.or}{" "}
                      <Link to="/my-ties">{list.data.myties}</Link>
                    </div>
                  )}
                </div>
                <div className="form-img-blok"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AddTie;
