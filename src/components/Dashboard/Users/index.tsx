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
import Hover from "../../Hover";

import "./users.scss";

const Users: FunctionComponent = () => {
  const [activeButton, setActiveButton] = useState<string>("1");
  const usersStore = useSelector((state: IUsersReducer) => state.usersReducer);
  const { usersLoadingStatus, users } = usersStore;
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNightMode } = appInterfaceStore;

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const dispatch = useDispatch();

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

  const spinner = usersLoadingStatus === "loading" ? <Spinner /> : null;

  return (
    <div className="users__wrapper" style={{ backgroundColor }}>
      <div className="users__header">
        <Hover>
          <button
            style={{ backgroundColor: accentColor.static }}
            className={`users__header-button ${
              activeButton == "1" ? "users__header-button_active" : ""
            }`}
            data-id="1"
            onClick={(e) => {
              getUsersList("USER");
              toggleHandler(e);
            }}
          >
            Users
          </button>
        </Hover>
        <Hover>
          <button
            style={{ backgroundColor: accentColor.static }}
            className={`users__header-button ${
              activeButton == "2" ? "users__header-button_active" : ""
            }`}
            data-id="2"
            onClick={(e) => {
              getUsersList("SELLER");
              toggleHandler(e);
            }}
          >
            Sellers
          </button>
        </Hover>
      </div>

      {spinner}
      {usersLoadingStatus === "idle" ? (
        <UsersList users={users} activeButton={activeButton} />
      ) : null}
    </div>
  );
};

export default Users;
