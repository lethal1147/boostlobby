"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../config/configureStore";
import { changeCurrentGame } from "../store/currentGameSlice";
import { Button } from "./button";

type Props = {
	isAuthen?: boolean;
};

export const NavBar = ({ isAuthen = false }: Props) => {
	const currentGame = useSelector(
		(state: RootState) => state.currentGame.currentGame,
	);
	const dispatch = useDispatch();
	const onChangeHandler = (value: string) => {
		dispatch(changeCurrentGame({ currentGame: value }));
	};
	return (
		<nav className="flex justify-between items-center bg-main-gray px-5 py-3">
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 rounded-full bg-white" />
				<h2 className=" text-main-white font-extrabold text-2xl">
					Boost Lobby
				</h2>
			</div>
			<div className="flex items-center gap-5 text-white">
				<Select
					defaultValue={currentGame}
					onValueChange={(e) => onChangeHandler(e)}
				>
					<SelectTrigger className="border-none text-white text-md hover:underline-gray transition-all">
						<SelectValue placeholder="Select your game" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectGroup>
							<SelectLabel>Game</SelectLabel>
							<SelectItem
								className="hover:bg-gray-200 border-b border-gray-200 cursor-pointer"
								value="valorant"
							>
								Valorant
							</SelectItem>
							<SelectItem
								className="hover:bg-gray-200 border-b border-gray-200 cursor-pointer"
								value="overwatch2"
							>
								Overwatch 2
							</SelectItem>
							<SelectItem
								className="hover:bg-gray-200 border-b border-gray-200 cursor-pointer"
								value="teamfightTactics"
							>
								Teamfight Tactics
							</SelectItem>
							<SelectItem
								className="hover:bg-gray-200 cursor-pointer"
								value="apexLegend"
							>
								Apex Legend
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<a
					className="hover:text-gray-300 hover:underline-gray transition-all"
					href="#pricing"
					id="#pricing"
				>
					Pricing
				</a>
				{<AuthenNav />}
			</div>
		</nav>
	);
};

const AuthenNav = () => {
	return (
		<>
			<Link
				href="/login"
				className="bg-main-orange text-white px-6 py-2 rounded hover:bg-main-orange-hover-20% transition-all"
			>
				Login
			</Link>
		</>
	);
};
