"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Button } from "../components/button";
import { BoosterRegisterForm, CustomerRegisterForm } from "./components";
import { registerStep } from "./constants/register";

export default function Register() {
	const [step, setStep] = useState(registerStep.selectRole);
	const isNotRegister = step !== registerStep.selectRole;
	const isCustomer = step === registerStep.customer;
	const strokeValue = isNotRegister ? "#FF7F50" : "url(#myGradient)";

	const stepTwo = isCustomer ? (
		<CustomerRegisterForm setStep={setStep} />
	) : (
		<BoosterRegisterForm setStep={setStep} />
	);

	return (
		<main
			id="registerPage"
			className="h-screen w-screen bg-main-gray text-main-gray flex items-center justify-center flex-col gap-5 relative"
		>
			<>
				<h1
					className={`text-main-white text-6xl font-bold mb-10 transition-all dura ${
						isNotRegister ? "  h-0 overflow-hidden" : "h-auto"
					}`}
				>
					Start Your Journey
				</h1>
				<article
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
						<svg
							className="self-center"
							width="64"
							height="5"
							viewBox="0 0 64 3"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>dashed line</title>
							<defs>
								{!isNotRegister && (
									<linearGradient
										id="myGradient"
										x1="0"
										x2="64"
										y1="1.5"
										y2="1.5"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#FF7F50" />
										<stop offset="1" stopColor="#D9D9D9" />
									</linearGradient>
								)}
							</defs>
							<line
								y1="1.5"
								x2="32"
								y2="1.5"
								stroke={strokeValue}
								strokeWidth="5"
								strokeDasharray="2 2"
							/>
							<line
								x1="32"
								y1="1.5"
								x2="64"
								y2="1.5"
								stroke={strokeValue}
								strokeWidth="5"
								strokeDasharray="2 2"
							/>
						</svg>

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
									<p className="text-center tracking-tight mb-6">
										Choose this path if you&apos;re looking to boost your rank,
										hone your skills, or conquer new challenges. As a customer,
										a world of expertise and support awaits you.
									</p>
									<Button
										onClick={() => setStep(registerStep.customer)}
										className="bg-main-orange text-main-white shadow-lg px-3 mx-5 py-3 rounded font-bold hover:bg-main-orange-hover-20% transition"
										text="Level Up My Game"
									/>
								</div>
								<Separator className="h-full w-[2px] mx-10 bg-main-orange" />
								<div className="flex justify-center flex-col gap-5">
									<h3 className="text-center text-xl font-semibold">Booster</h3>
									<p className="text-center tracking-tight mb-6">
										Select this role if you&apos;re ready to guide, mentor, and
										boost fellow gamers to their goals. As a booster, your
										skills will pave the way for victories and achievements.
									</p>
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
				</article>
			</>
			<Link
				href="/login"
				className=" size-10 flex justify-center items-center border-[3px] absolute top-5 left-5 border-off-gray hover:bg-main-white-hover-60% rounded-full"
			>
				<HiArrowSmLeft color="#D9D9D9" size={25} />
			</Link>
		</main>
	);
}
