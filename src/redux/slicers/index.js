import { combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import tasks from "./tasks";

export default combineReducers({
  user,
  tasks,
});
