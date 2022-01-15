import { createSlice } from "@reduxjs/toolkit";

export const userDataReducer = createSlice({
  name: "userDataReducer",
  initialState: {
    data: {}
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setData } = userDataReducer.actions;

export default userDataReducer.reducer;
