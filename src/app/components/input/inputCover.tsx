import { InputType } from "@/app/types/inputType";

export const InputCoverGray = ({
	children,
	label,
	required,
	id,
}: InputType) => {
	return (
		<div>
			{label && (
				<label className="input-label-gray" htmlFor={id}>
					{label}{" "}
					<span className={`${required ? "text-red-500" : " hidden"}`}>*</span>
				</label>
			)}
			{children}
		</div>
	);
};

export const InputCoverWhite = ({
	children,
	label,
	required,
	id,
}: InputType) => {
	return (
		<div className="w-full">
			{label && (
				<label className="input-label-white" htmlFor={id}>
					{label}{" "}
					<span className={`${required ? "text-red-500" : " hidden"}`}>*</span>
				</label>
			)}
			{children}
		</div>
	);
};
