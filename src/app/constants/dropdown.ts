import { Option } from "../types/inputType";

interface dropdownTypes {
	gameDropdowns: Option[];
	regionDropdowns: Option[];
	serviceDropdowns: Option[];
}

const homePageDropdowns: dropdownTypes = {
	gameDropdowns: [
		{ label: "Valorant", value: "valorant" },
		{ label: "Overwatch 2", value: "overwatch2" },
		{ label: "Teamfight Tactics", value: "teamfightTactics" },
		{ label: "Apex Legend", value: "apexLegend" },
	],
	regionDropdowns: [
		{ label: "APAC", value: "apac" },
		{ label: "Europe", value: "emea" },
		{ label: "America", value: "america" },
		{ label: "China", value: "china" },
	],
	serviceDropdowns: [
		{ label: "Rank boosting", value: "rank" },
		{ label: "Win boosting", value: "win" },
		{ label: "Placement", value: "placement" },
		{ label: "Battle Pass", value: "battlepass" },
	],
};

export default homePageDropdowns;
