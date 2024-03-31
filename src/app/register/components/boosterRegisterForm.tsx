import { Button } from "@/app/components/button";
import ModalWrapper from "@/app/components/modalWrapper";
import homePageDropdowns from "@/app/constants/dropdown";
import { Checkbox } from "@/components/ui/checkbox";
import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	SyntheticEvent,
	useState,
} from "react";
import { TermsOfServicesAlert } from ".";
import { InputSelect, InputText, InputTextArea } from "../../components/input";
import { initialFormInput, registerStep } from "../constants/register";
import { boosterFormType } from "../types/types";
import TermsOfService from "./termsOfService";

type BoosterRegisterFormType = {
	setStep: Dispatch<SetStateAction<string>>;
};

function BoosterRegisterForm({ setStep }: BoosterRegisterFormType) {
	const [termsOfService, setTermsOfService] = useState(false);
	const [formInput, setFormInput] = useState<boosterFormType>(initialFormInput);
	const [isAgree, setIsAgree] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const onChangeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { value, name } = e.target;
		setFormInput((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmitHandler = async (
		e: SyntheticEvent<HTMLFormElement, SubmitEvent>,
	): Promise<void> => {
		e.preventDefault();
		if (!isAgree) {
			setShowAlert(true);
			setTimeout(() => setShowAlert(false), 3000);
			return;
		}
	};

	const onCheckAgree = () => {
		if (showAlert) {
			setShowAlert(false);
		}
		setIsAgree(!isAgree);
	};

	const onCancel = () => {
		setFormInput(initialFormInput);
		setStep(registerStep.selectRole);
	};

	return (
		<form onSubmit={handleSubmitHandler}>
			<h2 className="text-3xl font-semibold text-main-orange col-span-12 text-center">
				Booster
			</h2>
			<InputText
				value={formInput.username}
				name="username"
				onChange={onChangeHandler}
				label="Username"
				cover="black"
			/>
			<InputText
				value={formInput.password}
				type="password"
				name="password"
				onChange={onChangeHandler}
				label="Password"
				cover="black"
			/>
			<InputText
				value={formInput.confirmPassword}
				type="password"
				name="confirmPassword"
				onChange={onChangeHandler}
				label="Confirm Password"
				cover="black"
			/>
			<InputText
				value={formInput.email}
				type="email"
				name="email"
				onChange={onChangeHandler}
				label="Email"
				cover="black"
			/>
			<InputSelect
				value={formInput.region}
				name="region"
				contentStyling="bg-white"
				triggerStyling="border-none bg-off-gray"
				options={homePageDropdowns.regionDropdowns}
				onChange={
					onChangeHandler as (e: string | ChangeEvent<HTMLInputElement>) => void
				}
				label="Region"
				cover="black"
			/>
			<InputSelect
				value={formInput.game}
				name="game"
				contentStyling="bg-white"
				triggerStyling="border-none bg-off-gray"
				options={homePageDropdowns.gameDropdowns}
				onChange={
					onChangeHandler as (e: string | ChangeEvent<HTMLInputElement>) => void
				}
				label="Game"
				cover="black"
			/>
			<InputSelect
				value={formInput.currentRank}
				name="currentRank"
				contentStyling="bg-white"
				triggerStyling="border-none bg-off-gray"
				options={homePageDropdowns.regionDropdowns}
				onChange={
					onChangeHandler as (e: string | ChangeEvent<HTMLInputElement>) => void
				}
				label="Current Rank"
				cover="black"
			/>
			<InputText
				value={formInput.profileURL}
				name="profileURL"
				onChange={onChangeHandler}
				label="Profile URL"
				cover="black"
			/>
			<InputTextArea
				value={formInput.info}
				name="info"
				onChange={onChangeHandler}
				label="Introduct Yourself"
				cover="black"
			/>
			<div className="flex mt-3 rounded items-center space-x-2 text-main-gray">
				<Checkbox
					className="bg-off-gray border-none"
					id="agree"
					checked={isAgree}
					onCheckedChange={onCheckAgree}
				/>
				<label
					htmlFor="agree"
					className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					I agree with this{" "}
					<button
						className="text-main-blue underline font-semibold transition hover:text-main-blue-hover-40%"
						type="button"
						onClick={() => setTermsOfService(true)}
					>
						terms of services
					</button>
				</label>
			</div>
			<div className="flex justify-between mt-10">
				<Button
					type="button"
					onClick={onCancel}
					className="bg-off-gray text-disable-gray shadow-xl px-10 py-2 rounded font-bold hover:bg-main-white-hover-20% transition"
					text="Cancel"
				/>
				<Button
					type="submit"
					className="bg-main-orange text-main-white shadow-lg px-10 py-2 rounded font-bold hover:bg-main-orange-hover-20% transition"
					text="Register"
				/>
			</div>

			<ModalWrapper
				isOpen={termsOfService}
				onClose={() => setTermsOfService(false)}
			>
				<TermsOfService
					setIsAgree={onCheckAgree}
					setTermsOfService={setTermsOfService}
				/>
			</ModalWrapper>
			<TermsOfServicesAlert showAlert={showAlert} />
		</form>
	);
}

export default BoosterRegisterForm;
