import { TEST_ACTION, TEST_PROMISE_ACTION } from "redux/actions/actionTypes";
import { pending, fulfilled, rejected } from "redux/utils/baseActions";
import { baseState } from "redux/utils/baseState";

export const testReducer = (state = baseState("message", ""), action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        messageTest: action.payload.testMessage,
      };
    case pending(TEST_PROMISE_ACTION): {
      return {
        ...state,
        loading: true,
      };
    }
    case fulfilled(TEST_PROMISE_ACTION): {
      return {
        ...state,
        loading: false,
        loaded: true,
        message: "The promise worked",
      };
    }
    case rejected(TEST_PROMISE_ACTION):
    default:
      return {
        ...state,
        loading: false,
      };
  }
};
