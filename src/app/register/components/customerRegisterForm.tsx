import { Button } from "@/app/components/button";
import homePageDropdowns from "@/app/constants/dropdown";
import { Dispatch, SetStateAction } from "react";
import { InputSelect, InputText } from "../../components/input/index";
import { registerStep } from "../constants/register";

type CustomerRegisterFormType = {
	setStep: Dispatch<SetStateAction<string>>;
};

function CustomerRegisterForm({ setStep }: CustomerRegisterFormType) {
	return (
		<>
			<h2 className="text-3xl font-semibold text-main-orange col-span-12 text-center">
				Customer
			</h2>
			<InputText
				value={""}
				onChange={() => null}
				label="Username"
				cover="black"
			/>
			<InputText
				value={""}
				onChange={() => null}
				label="Password"
				cover="black"
			/>
			<InputText
				value={""}
				onChange={() => null}
				label="Confirm Password"
				cover="black"
			/>
			<InputText value={""} onChange={() => null} label="Email" cover="black" />
			<InputSelect
				contentStyling="bg-white"
				triggerStyling="border-none bg-off-gray"
				options={homePageDropdowns.regionDropdowns}
				value={""}
				onChange={() => null}
				label="Region"
				cover="black"
			/>
			<div className="flex justify-between mt-10">
				<Button
					onClick={() => setStep(registerStep.selectRole)}
					className="bg-off-gray text-disable-gray shadow-xl px-10 py-2 rounded font-bold hover:bg-main-white-hover-20% transition"
					text="Cancel"
				/>
				<Button
					className="bg-main-orange text-main-white shadow-lg px-10 py-2 rounded font-bold hover:bg-main-orange-hover-20% transition"
					text="Register"
				/>
			</div>
		</>
	);
}

export default CustomerRegisterForm;
