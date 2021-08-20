import { pending, fulfilled, rejected } from "./baseActions";
import { baseState } from "./baseState";

const stateType = (type = "string") => {
  const types = {
    string: "",
    object: {},
    array: [],
  };
  return types[type];
};
export const baseReducer =
  (actionType = "ACTION_TYPE", defaultState = "state", dataType = "string") =>
  (state = baseState(defaultState, stateType(dataType)), action) => {
    switch (action.type) {
      case pending(actionType): {
        return {
          ...state,
          loaded: false,
          loading: true,
        };
      }
      case fulfilled(actionType): {
        return {
          ...state,
          loading: false,
          loaded: true,
          [defaultState]: action.payload.data.data,
        };
      }
      case rejected(actionType):
      default:
        return {
          ...state,
          loading: false,
        };
    }
  };
