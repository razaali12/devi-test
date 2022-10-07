// @flow
import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";

const TasksReducer = createSlice({
  name: "customer",
  initialState: Immutable({
    data: [],
  }),
  reducers: {
    createCustomerSuccess(state, action) {
      const allTask = [...state.data];

      allTask.push({ ...action.payload });

      state.data = allTask.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    },

    getCustomerSuccess(state, action) {
      const allTask = [...action.payload];

      state.data = allTask.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    },

    updateCustomerSuccess(state, action) {
      let allTasks = [...state.data];
      const task = action.payload;

      allTasks = allTasks.filter((t) => t.id !== task.id);
      allTasks.push(task);

      allTasks = allTasks.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      state.data = allTasks;
    },
  },
});

export const {
  createCustomerSuccess,
  getCustomerSuccess,
  updateCustomerSuccess,
} = TasksReducer.actions;

export default TasksReducer.reducer;
