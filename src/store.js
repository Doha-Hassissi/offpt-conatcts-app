import { configureStore } from "@reduxjs/toolkit";
import controlReducer from "./slices/controlConatctsSlice";
import contactsReducer from "./slices/conatctsSlice";

export const store = configureStore({
  reducer: {
    control: controlReducer,
    contacts: contactsReducer,
  },
});
