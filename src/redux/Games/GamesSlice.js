import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  arrayLength: null,
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
    addGames(state, action) {
      state.games = action.payload;
    },
    changeArrayLength(state, action) {
      state.arrayLength = action.payload;
    },
  },
});

export const gamesReducer = gamesSlice.reducer;
export const { changeToken, addGames, changeArrayLength } = gamesSlice.actions;
