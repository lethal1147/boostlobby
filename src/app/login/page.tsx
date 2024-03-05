"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import loginImage from "../assets/login-side-image.jpg";
import { Button } from "../components/button";
import { InputText } from "../components/input";

export default function Login() {
	return (
		<main className=" bg-main-gray grid grid-cols-5 h-screen overflow-hidden">
			<aside className="max-h-full w-full col-span-2">
				<Image
					className="h-full w-full"
					src={loginImage}
					alt="Valorant game image"
				/>
			</aside>
			<div className="col-span-3">
				<h2 className=" font-bold text-5xl text-center pt-20 pb-14 text-white">
					Boost Lobby
				</h2>
				<div className="bg-main-white mx-40 p-10 rounded flex flex-col gap-5">
					<h3 className="section-header text-5xl py-0 text-main-orange">
						Login
					</h3>
					<InputText
						label="Email or Username"
						value={""}
						onChange={(e) => null}
					/>
					<InputText label="Password" value={""} onChange={(e) => null} />
					<div className="flex justify-between ">
						<div className="flex gap-1 items-center">
							<Checkbox
								className=" bg-off-gray size-4 border-none"
								id="rememberMe"
							/>
							<label
								htmlFor="rememberMe"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Remember me
							</label>
						</div>
						<Button
							className="text-main-blue underline cursor-pointer hover:text-main-blue-hover-20%"
							As="a"
							text="Forget password"
						/>
					</div>
					<Button
						className="p-2.5 rounded bg-main-orange shadow-lg text-white w-full text-2xl font-bold hover:bg-main-orange-hover-20% transition"
						text="Login"
					/>
					<span className="flex w-full gap-5 items-center">
						<div className="h-0.5 flex-grow bg-off-gray" />
						<p className="text-2xl font-bold text-off-gray">OR</p>
						<div className="h-0.5 flex-grow bg-off-gray" />
					</span>
					<Button
						className="p-2.5 rounded bg-main-blue shadow-lg text-white w-full text-2xl font-bold hover:bg-main-blue-hover-20% transition"
						text="Signin with Facebook"
					/>
					<Button
						className="p-2.5 rounded bg-white shadow-lg text-off-gray w-full text-2xl font-bold hover:bg-main-white-hover-20% hover:text-white transition"
						text="Signin with Google"
					/>
					<span className="text-main-gray">
						Don&apos;t have an account?{" "}
						<Link href="" className="text-main-blue underline font-semibold">
							Register
						</Link>
					</span>
				</div>
			</div>
		</main>
	);
}
