import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	children?: React.ReactNode;
	As?: string;
}

export const Button = ({ As = "button", text = "", ...props }: ButtonProps) => {
	return <As {...props}>{text}</As>;
};
