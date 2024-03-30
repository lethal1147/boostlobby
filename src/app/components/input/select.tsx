import { InputSelectType } from "@/app/types/inputType";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { InputCoverGray, InputCoverWhite } from "./inputCover";

const InputSelect = ({
	value,
	onChange,
	placeholder,
	label,
	id,
	name,
	required,
	cover = "white",
	options = [],
	triggerStyling,
	contentStyling,
}: InputSelectType) => {
	const handleValueChange = (value: string) => {
		const event = {
			target: {
				value: value,
				name: name,
			},
		} as unknown as React.ChangeEvent<HTMLInputElement>;

		onChange(event);
	};
	if (cover === "white") {
		return (
			<InputCoverWhite required={required} label={label} id={id}>
				<Select
					onValueChange={handleValueChange}
					defaultValue={value as string}
				>
					<SelectTrigger className={triggerStyling}>
						<SelectValue placeholder={placeholder} />
					</SelectTrigger>
					<SelectContent className={contentStyling}>
						<SelectGroup>
							<SelectLabel>{label}</SelectLabel>
							{options.map(({ value, label }) => (
								<SelectItem key={label} value={value}>
									{label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</InputCoverWhite>
		);
	}
	return (
		<InputCoverGray required={required} label={label} id={id}>
			<Select onValueChange={handleValueChange} defaultValue={value as string}>
				<SelectTrigger className={triggerStyling}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent className={contentStyling}>
					<SelectGroup>
						<SelectLabel>{label}</SelectLabel>
						{options.map(({ value, label }) => (
							<SelectItem key={label} value={value}>
								{label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</InputCoverGray>
	);
};

export default InputSelect;
