export interface formType {
	username: string;
	password: string;
	confirmPassword: string;
	email: string;
	region: string;
}

export interface boosterFormType extends formType {
	game: string;
	currentRank: string;
	profileURL: string;
	info: string;
}
