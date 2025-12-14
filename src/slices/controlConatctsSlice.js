import { createSlice } from "@reduxjs/toolkit";

const controlContactsSlice = createSlice({
  name: "controlSlice",
  initialState: {
    search: "",
    isSortedAsc: true,
  },
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateIsSorted: (state) => {
      state.isSortedAsc = !state.isSortedAsc;
    },
  },
});

export const { updateSearch, updateIsSorted } = controlContactsSlice.actions;

export default controlContactsSlice.reducer;
