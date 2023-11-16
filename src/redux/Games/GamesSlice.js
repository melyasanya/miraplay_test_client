import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  filteredGames: [],
  token: "",
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    changeToken(state, action) {
      if (!state.token) {
        state.token = action.payload;
      } else {
        state.token = "";
      }
    },
  },
});

export const gamesReducer = gamesSlice.reducer;
export const { changeToken } = gamesSlice.actions;
