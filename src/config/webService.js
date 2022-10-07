import ApiHandler from "../services/ApiHandler";
import { getCurrentAccessToken } from "../services/utils";

export const API_TIMEOUT = 30000;
export const ABORT_REQUEST_MESSAGE = "Network failed. Aborted request.";

export const BASE_URL = process.env.REACT_APP_BACKEND_DEV_URL;

export const ERROR_SOMETHING_WENT_WRONG =
  "Something went wrong, Please try again later";
export const ERROR_API_NOT_FOUND = "Api not found, Please try again later";

export const ERROR_NETWORK_NOT_AVAILABLE =
  "Please connect to the working Internet";

export const ERROR_ACCOUNT_BLOCKED =
  "Either your account is blocked or deleted";

export const ERROR_TOKEN_EXPIRE = "Session Expired, Please login again!";

export const REQUEST_TYPE = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
};

//  USER
export const LOGIN_REQ = {
  route: "/auth",
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

// CONTACT US

// CUSTOMERS

export const GET_CUSTOMER = {
  route: "",
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const GET_SINGLE_CUSTOMER = {
  route: "",
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const ADD_CUSTOMER = {
  route: "",
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const UPDATE_CUSTOMER = {
  route: "",
  access_token_required: true,
  type: REQUEST_TYPE.PUT,
};

export const DELETE_CUSTOMER = {
  route: "",
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};

// TODOS
export const CREATE_TODO ={
  route: "todo/query",
  access_token_required: true,
  type: REQUEST_TYPE.POST,
}

// SUBSCRIPTIONS

export const GET_SUBSCRIPTION = {
  route: "/subscriptions/get",
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const GET_SINGLE_SUBSCRIPTION = {
  route: "/subscriptions/get",
  access_token_required: true,
  type: REQUEST_TYPE.GET,
};

export const ADD_SUBSCRIPTION = {
  route: "/subscriptions/create",
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const UPDATE_SUBSCRIPTION = {
  route: "/subscriptions/update",
  access_token_required: true,
  type: REQUEST_TYPE.PUT,
};

export const DELETE_SUBSCRIPTION = {
  route: "/subscriptions/delete",
  access_token_required: true,
  type: REQUEST_TYPE.DELETE,
};

export const callRequest = async (
  url,
  data,
  parameter,
  query,
  header = {},
  baseURL = BASE_URL
) => {
  let _header = header;
  if (url.access_token_required) {
    const _access_token = getCurrentAccessToken();
    console.log("accc", _access_token);
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: `Bearer ${_access_token}`,
        },
      };
    }
  }

  let _url =
    parameter && parameter !== null ? `${url.route}/${parameter}` : url.route;
  if (query && query !== null) {
    _url = `${_url}?${query}`;
  }
  try {
    let response = await ApiHandler(url.type, _url, data, _header, baseURL);
    console.log("response", response);
    return response;
  } catch (error) {
    return error;
  }
};
