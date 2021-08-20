import { store } from "redux/store";
import { http } from "redux/utils/axiosHttp";
import { TEST_ACTION } from "./actionTypes";

export const testAction = () => {
  store.dispatch({
    type: TEST_ACTION,
    payload: { messageTest: "It must be working" },
  });
};
export const testPromiseAction = () => {
  store.dispatch({
    type: TEST_ACTION,
    payload: http.get("/"),
  });
};
