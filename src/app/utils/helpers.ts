// source : https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
export const pickTextColorBasedOnBgColor = (
	bgColor: string,
	lightColor: string,
	darkColor: string,
) => {
	const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
	const r = parseInt(color.substring(0, 2), 16); // hexToR
	const g = parseInt(color.substring(2, 4), 16); // hexToG
	const b = parseInt(color.substring(4, 6), 16); // hexToB
	return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
};

export const setDefault = () => {
	document.body.style.height = "auto";
	document.body.style.overflowY = "auto";
};
