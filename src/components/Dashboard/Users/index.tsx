import { FunctionComponent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers } from "../../../services/apiUsers";
import {
  usersFetching,
  usersFetched,
  usersFetchingError,
} from "../../../actions";
import { IStore } from "../../../interfaces/store";

import { IUsersReducer } from "../../../interfaces/usersReducer";
import { lightTheme, nightTheme } from "../../../data/constants";
import UsersList from "./UsersList";
import Spinner from "../../Spinner";
import ErrorMessage from "../../ErrorMessage";
import Hover from "../../Hover";
import Active from "../../Active";
import { useTranslation } from "react-i18next";

import "./users.scss";

const Users: FunctionComponent = () => {
  const [activeButton, setActiveButton] = useState<string>("1");
  const usersStore = useSelector((state: IUsersReducer) => state.usersReducer);
  const { usersLoadingStatus, users } = usersStore;
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode } = appInterfaceStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const dispatch = useDispatch();

  const { t } = useTranslation("dataLang");

  const getUsersList = async (role: string) => {
    try {
      dispatch(usersFetching());
      const users = await getUsers(role);
      dispatch(usersFetched(users));
    } catch {
      dispatch(usersFetchingError());
    }
  };

  useEffect(() => {
    getUsersList("USER");
  }, []);

  const toggleHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    if (typeof id === "string") {
      setActiveButton(id);
    }
  };

  return (
    <>
      {usersLoadingStatus === "loading" ? (
        <div className="dashboard__spinner">
          <Spinner />
        </div>
      ) : usersLoadingStatus === "error" ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className="dashboard__header">{t("dashboard.headers.users")}</h1>
          <div className="users__wrapper" style={{ backgroundColor }}>
            <div className="users__header">
              <Hover>
                <Active
                  classN={`users__header-button ${
                    activeButton == "1" ? "users__header-button_active" : ""
                  }`}
                >
                  <button
                    className={`users__header-button ${
                      activeButton == "1" ? "users__header-button_active" : ""
                    }`}
                    data-id="1"
                    onClick={(e) => {
                      getUsersList("USER");
                      toggleHandler(e);
                    }}
                  >
                    {t("buttonsUsersList.users")}
                  </button>
                </Active>
              </Hover>
              <Hover>
                <Active
                  classN={`users__header-button ${
                    activeButton == "2" ? "users__header-button_active" : ""
                  }`}
                >
                  <button
                    className={`users__header-button ${
                      activeButton == "2" ? "users__header-button_active" : ""
                    }`}
                    data-id="2"
                    onClick={(e) => {
                      getUsersList("SELLER");
                      toggleHandler(e);
                    }}
                  >
                    {t("buttonsUsersList.sellers")}
                  </button>
                </Active>
              </Hover>
            </div>
            <UsersList users={users} activeButton={activeButton} />
          </div>
        </>
      )}
    </>
  );
};

export default Users;
