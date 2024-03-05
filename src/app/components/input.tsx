import { Input } from "@/components/ui/input";
import React from "react";

type InputText = {
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	name?: string;
	disabled?: boolean;
	label?: string;
	placeholder?: string;
	id?: string;
	required?: boolean;
};

export const InputText = ({
	value,
	onChange,
	type = "text",
	disabled,
	label,
	placeholder,
	id,
	name,
	required,
	...props
}: InputText) => {
	return (
		<div>
			<label className="text-sm font-semibold text-main-gray" htmlFor={id}>
				{label}{" "}
				<span className={`${required ? "text-red-500" : " hidden"}`}>*</span>
			</label>
			<Input
				className="border-none bg-off-gray"
				disabled={disabled}
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				name={name}
				{...props}
			/>
		</div>
	);
};
