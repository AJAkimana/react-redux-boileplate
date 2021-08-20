import { combineReducers } from "redux";
import { TEST_ACTION } from "redux/actions/actionTypes";
import { baseReducer } from "redux/utils/baseReducer";
import { testReducer } from "./testReducer";

export default combineReducers({
  baseRedux: baseReducer(TEST_ACTION, "test_state"),
  test: testReducer,
});
