import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	InputHTMLAttributes,
} from "react";

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
	type?: string;
	name?: string;
	disabled?: boolean;
	label?: string;
	placeholder?: string;
	id?: string;
	required?: boolean;
	cover?: "white" | "black";
}

export type InputType = {
	children: React.ReactNode;
	label?: string;
	required?: boolean;
	id?: string;
};

export interface InputTextType extends InputPropsType {
	value: string | number | undefined;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputTextAreaType
	extends InputHTMLAttributes<HTMLTextAreaElement> {
	value: string | number | undefined;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	cover?: "white" | "black";
	label?: string;
}

export type Option = {
	value: string;
	label: string;
};

export interface InputSelectType extends InputPropsType {
	options: Option[];
	value: string | number | undefined;
	onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
	triggerStyling?: string;
	contentStyling?: string;
}

export interface InputCheckboxType {
	id: string;
	label: string;
	checked: boolean;
	onChange: (e: string | ChangeEvent<HTMLInputElement>) => void;
}
