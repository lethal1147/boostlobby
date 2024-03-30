import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { InputTextAreaType } from "../../types/inputType";
import { InputCoverGray, InputCoverWhite } from "./inputCover";

const InputTextArea = ({
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
}: InputTextAreaType) => {
	if (cover === "white") {
		return (
			<InputCoverWhite label={label} required={required} id={id}>
				<Textarea
					className="border-none bg-off-gray rounded w-full"
					disabled={disabled}
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
			<Textarea
				className="border-none bg-off-gray"
				disabled={disabled}
				id={id}
				value={value}
				onChange={onChange}
				name={name}
				{...props}
			/>
		</InputCoverGray>
	);
};

export default InputTextArea;
