import { Input } from "@/components/ui/input";
import React from "react";
import { InputTextType } from "../../types/inputType";
import { InputCoverGray, InputCoverWhite } from "./inputCover";

const InputText = ({
	value,
	onChange,
	type = "text",
	disabled,
	label,
	placeholder,
	id,
	name,
	required,
	cover = "white",
	...props
}: InputTextType) => {
	if (cover === "white") {
		return (
			<InputCoverWhite label={label} required={required} id={id}>
				<Input
					className="border-none bg-off-gray rounded w-full"
					disabled={disabled}
					type={type}
					id={id}
					value={value}
					onChange={onChange}
					name={name}
					{...props}
				/>
			</InputCoverWhite>
		);
	}
	return (
		<InputCoverGray label={label} required={required} id={id}>
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
		</InputCoverGray>
	);
};

export default InputText;
