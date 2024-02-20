import { createSlice } from "@reduxjs/toolkit";

const currentGameSlice = createSlice({
	name: "currentGame",
	initialState: {
		currentGame: "valorant",
	},
	reducers: {
		changeCurrentGame: (state, action) => {
			state.currentGame = action.payload.currentGame;
		},
	},
});

export const { changeCurrentGame } = currentGameSlice.actions;

const currentGameReducer = currentGameSlice.reducer;
export default currentGameReducer;
