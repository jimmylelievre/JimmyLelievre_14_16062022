import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import employeesList from "../slices/employeesList.slice";
import form from "../slices/form.slice";

export const store = configureStore({
  reducer: {
    form: form,
    employeesList: employeesList,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
