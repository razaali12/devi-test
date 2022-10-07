import { take, put, call, fork } from "redux-saga/effects";
import { loginRequest, loginsuccess } from "../slicers/user";
import { ALERT_TYPES } from "../../constants";
import { callRequest, LOGIN_REQ } from "../../config/webService";
import { toastAlert } from "../../services/utils";

function* login() {
  while (true) {
    const { payload } = yield take(loginRequest.type);
    console.log({ payload });
    const { responseCallback, credentials } = payload;
    try {
      const response = yield call(
        callRequest,
        LOGIN_REQ,
        credentials,
        "",
        "",
        {}
      );

      if (response.access_token) {
        localStorage.setItem("token", response.access_token);

        if (responseCallback) responseCallback(true);

        yield put(loginsuccess(response));
      } else {
        if (response.status === 403 || response.status === 404) throw response;

        if (responseCallback) responseCallback(false, response.message);

        if (response.message) toastAlert(response.message, ALERT_TYPES.ERROR);
      }
    } catch (err) {
      if (responseCallback) responseCallback(false, err.data.error);
    }
  }
}

export default function* root() {
  yield fork(login);
}
