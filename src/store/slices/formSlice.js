import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice.js";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

// Export the combined reducer
export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;
