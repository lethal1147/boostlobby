"use client";

import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "../components/button";
import InputText from "../components/input/input";
import InputSelect from "../components/input/select";
import InputTextArea from "../components/input/textArea";
import homePageDropdowns from "../constants/dropdown";
import { registerStep } from "./constants/registerStep";

export default function Register() {
	const [step, setStep] = useState(registerStep.selectRole);
	const isNotRegister = step !== registerStep.selectRole;
	const isCustomer = step === registerStep.customer;

	const stepTwo = isCustomer ? (
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
	) : (
		<>
			<h2 className="text-3xl font-semibold text-main-orange col-span-12 text-center">
				Booster
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
			<InputSelect
				contentStyling="bg-white"
				triggerStyling="border-none bg-off-gray"
				options={homePageDropdowns.gameDropdowns}
				value={""}
				onChange={() => null}
				label="Game"
				cover="black"
			/>
			<InputSelect
				contentStyling="bg-white"
				triggerStyling="border-none bg-off-gray"
				options={homePageDropdowns.regionDropdowns}
				value={""}
				onChange={() => null}
				label="Current Rank"
				cover="black"
			/>
			<InputText
				value={""}
				onChange={() => null}
				label="Profile URL"
				cover="black"
			/>
			<InputTextArea
				value={""}
				onChange={() => null}
				label="Introduct Yourself"
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

	return (
		<main className="h-screen w-screen bg-main-gray text-main-gray flex items-center justify-center flex-col gap-5">
			<>
				<h1
					className={`text-main-white text-6xl font-bold mb-10 transition-all dura ${
						isNotRegister ? "  h-0 overflow-hidden" : "h-auto"
					}`}
				>
					Start Your Journey
				</h1>
				<div
					className={`flex flex-col bg-main-white shadow-lg py-10 px-14 max-w-[850px] w-[750px] gap-10 rounded transition-all duration-500 ease-in-out overflow-hidden ${
						isNotRegister ? "h-[750px]" : "h-auto"
					}`}
				>
					<div className="flex mx-auto">
						<div
							onMouseDown={() => setStep(registerStep.selectRole)}
							className="w-20 h-20 bg-main-orange cursor-pointer rounded-full flex justify-center items-center"
						>
							<p className="text-main-white font-bold text-3xl">1</p>
						</div>
						<div
							className={`self-center bg-gradient-to-r from-main-orange  ${
								isNotRegister ? " to-main-orange" : "to-off-gray"
							}`}
						>
							<div className="w-32 h-0.5 border-t-4 border-inherit border-dashed" />
						</div>
						<div
							className={`w-20 h-20  rounded-full flex justify-center items-center ${
								isNotRegister ? "bg-main-orange" : "bg-off-gray"
							}`}
						>
							<p className="text-main-white font-bold text-3xl">2</p>
						</div>
					</div>

					{!isNotRegister && (
						<div className="animate-slideLeft">
							<h2 className="text-3xl font-semibold text-main-orange text-center mb-10">
								Select Your Role
							</h2>
							<div className="flex">
								<div className="flex justify-center flex-col gap-5">
									<h3 className="text-center text-xl font-semibold">
										Customer
									</h3>
									<div className="text-center tracking-tight mb-6">
										Choose this path if you&apos;re looking to boost your rank,
										hone your skills, or conquer new challenges. As a customer,
										a world of expertise and support awaits you.
									</div>
									<Button
										onClick={() => setStep(registerStep.customer)}
										className="bg-main-orange text-main-white shadow-lg px-3 mx-5 py-3 rounded font-bold hover:bg-main-orange-hover-20% transition"
										text="Level Up My Game"
									/>
								</div>
								<Separator className="h-full w-[2px] mx-10 bg-main-orange" />
								<div className="flex justify-center flex-col gap-5">
									<h3 className="text-center text-xl font-semibold">Booster</h3>
									<div className="text-center tracking-tight mb-6">
										Select this role if you&apos;re ready to guide, mentor, and
										boost fellow gamers to their goals. As a booster, your
										skills will pave the way for victories and achievements.
									</div>
									<Button
										onClick={() => setStep(registerStep.booster)}
										className="bg-main-orange text-main-white shadow-lg px-3 mx-5 py-3 rounded font-bold hover:bg-main-orange-hover-20% transition"
										text="Empower Others Players"
									/>
								</div>
							</div>
						</div>
					)}
					{isNotRegister && (
						<div className="flex flex-col gap-3 animate-slideLeft overflow-x-scroll px-5 scrollbar">
							{stepTwo}
						</div>
					)}
				</div>
			</>
		</main>
	);
}
