import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : [],
  },
  reducers: {
    addNewContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
    removeAll: (state) => {
      state.contacts = [];
    },
  },
});

export const { addNewContact, removeContact, removeAll } =
  contactsSlice.actions;

export default contactsSlice.reducer;
