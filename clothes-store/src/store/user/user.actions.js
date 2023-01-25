import {createAction} from "../../utils/reducers/reducers.utils";

export const ACTIONS = {
  SET_USER: "SET_USER"
}

export const setCurrentUser = (user) => createAction(ACTIONS.SET_USER, user);
