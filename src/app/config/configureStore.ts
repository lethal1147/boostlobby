import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import currentGameReducer from "../store/currentGameSlice";
import pricingSliceReducer from "../store/pricingSlice";

const rootReducer = combineReducers({
	currentGame: currentGameReducer,
	pricing: pricingSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const useAppDispatch = () => useDispatch();

export type AppDispatch = typeof store.dispatch;

export default store;
