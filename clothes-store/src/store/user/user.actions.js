import {createAction} from "../../utils/reducers/reducers.utils";

export const USER_ACTIONS = {
  SET_USER: "SET_USER"
}

export const setCurrentUser = (user) => createAction(USER_ACTIONS.SET_USER, user);
