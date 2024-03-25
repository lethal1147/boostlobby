import { InputCheckboxType } from "@/app/types/inputType";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";

interface CheckboxInputPropsType extends CheckboxProps {
	label: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	onChange: any;
	// ยังหาท่าที่ดีกว่าไม่ได้
}

const CheckboxInput = ({
	id,
	label,
	checked,
	onChange,
}: CheckboxInputPropsType) => {
	const onChangeHandler = (checked: CheckedState): void => {
		console.log(checked);
		const isChecked: string = checked ? "Y" : "N";
		onChange(isChecked);
	};

	return (
		<div className="flex p-3 rounded items-center space-x-2 bg-main-gray text-off-gray">
			<Checkbox
				className="bg-off-gray"
				checked={checked}
				onCheckedChange={onChangeHandler}
				id={id}
			/>
			<label
				htmlFor={id}
				className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{label}
			</label>
		</div>
	);
};

export default CheckboxInput;
