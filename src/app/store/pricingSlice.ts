import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PricingSliceType } from "../types/homePageType";

const initialState: PricingSliceType = {
	game: "",
	service: "",
	region: "",
	rankStart: "",
	rankStartPoint: "",
	rankTo: "",
	rankToPoint: "",
	appearOfflineFlag: "N",
	agentLockFlag: "N",
	soloFlag: "N",
	duoFlag: "N",
	streamFlag: "N",
	priorityCompleteFlag: "N",
	price: "0",
	priceAfterDiscount: "0",
	coupons: "",
};

const pricingSlice = createSlice({
	name: "pricingSlice",
	initialState,
	reducers: {
		ChangeProperty: (
			state,
			action: PayloadAction<{
				key: keyof PricingSliceType;
				value: string;
			}>,
		) => {
			const { key, value } = action.payload;
			console.log(value);
			state[key] = value as string;
		},
	},
});

export const { ChangeProperty } = pricingSlice.actions;

const pricingSliceReducer = pricingSlice.reducer;
export default pricingSliceReducer;
