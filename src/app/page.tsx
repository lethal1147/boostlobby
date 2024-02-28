"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import step1Image from "/src/app/assets/6333050-removebg-preview.png";
import step4Image from "/src/app/assets/Completed-pana.png";
import step2Image from "/src/app/assets/Criticalthinking-pana.png";
import step3Image from "/src/app/assets/Mobiletesting-pana.png";
import mainImage from "/src/app/assets/hero-image.png";
import stepLine from "/src/app/assets/stepLine.png";
import { Button } from "./components/button";
import { RootState } from "./config/configureStore";
import { STAR_RATING_STYLES } from "./config/styling";
import { MAIN_GRAY, MAIN_ORANGE, MAIN_WHITE } from "./constants/color";
import TestimonialCard from "./feature/component/TestimonialCard";
import { changeCurrentGame } from "./store/currentGameSlice";

export default function Home() {
	return (
		<main className=" bg-main-white">
			<HeroSection />
			<HowToSection />
			<TestimonialsSection />
			<PricingSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="grid grid-cols-2 py-24 px-10 h-[880px]">
			<div className="col-span-1 flex justify-center">
				<Image priority className="w-full" src={mainImage} alt="Gaming" />
			</div>
			<article className="col-span-1 pl-20 pr-32 flex flex-col gap-10 pt-20">
				<h1 className="text-3xl font-bold">
					Tried? <br /> So, let me cook!
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
					quam nemo praesentium quisquam accusamus non. Quos, asperiores! Rerum
					voluptates excepturi placeat fugiat iste veritatis, quia harum
					pariatur facere, ea eveniet?
				</p>

				<Button
					className="bg-main-orange text-white px-6 py-4 font-bold text-xl rounded hover:bg-main-orange-hover-20% transition-all shadow-md"
					text="Game on"
				/>

				<span className="font-bold">Our services :</span>
				<aside className="grid grid-cols-3 gap-5 text-main-white">
					<ServiceCard text="Elo Boosting" Icon={<HiChartBar size={40} />} />
					<ServiceCard text="Coaching" Icon={<IoPeopleSharp size={40} />} />
					<ServiceCard text="Placement" Icon={<FaCheckCircle size={40} />} />
				</aside>
			</article>
		</section>
	);
}

type ServiceCardProps = {
	text: string;
	Icon: React.ReactNode;
};

function ServiceCard({ text, Icon }: ServiceCardProps) {
	return (
		<div className=" bg-main-blue shadow-md col-span-1 p-5 rounded-[10px] flex flex-col gap-3 hover:translate-y-[-5px] transition-all">
			{Icon}
			<p className="font-bold">{text}</p>
		</div>
	);
}

function HowToSection() {
	return (
		<section className=" bg-off-gray">
			<h2 className="section-header">How to Get Start</h2>
			<article className="grid grid-cols-2 px-32 relative">
				{/* step 1 */}
				<div className="w-full h-[400px] flex justify-center">
					<Image src={step1Image} alt="Sign up application" />
				</div>
				<div className=" flex flex-col justify-center px-[203px]">
					<h3 className="text-xl font-bold pb-5 underline">
						Sign Up & Join Our Community
					</h3>
					<p>
						<span className=" text-main-orange font-bold">Join in:</span> Begin
						your journey to gaming excellence by signing up. Create your account
						in just a few clicks and become a part of our vibrant community of
						gamers. Whether you&apos;re a seasoned player looking for a boost or
						a skilled booster ready to help others climb the ranks, your next
						level starts here.
					</p>
				</div>
				{/* step 2 */}

				<div className=" flex flex-col justify-center px-[203px]">
					<h3 className="text-xl font-bold pb-5 underline">
						Choose Your Arena
					</h3>
					<p>
						<span className=" text-main-orange font-bold">Select game:</span>{" "}
						Dive into our wide selection of popular games. From strategic
						battles to epic adventures, select the game you wish to conquer.
						Each game comes with its own set of challenges and opportunities for
						growth. Pick your arena and prepare for battle.
					</p>
				</div>
				<div className="w-full h-[300px] flex justify-center">
					<Image src={step2Image} alt="Thinking image" />
				</div>
				{/* step 3 */}
				<div className="w-full h-[400px] flex justify-center">
					<Image src={step3Image} alt="Customize image" />
				</div>
				<div className=" flex flex-col justify-center px-[203px]">
					<h3 className="text-xl font-bold pb-5 underline">
						Customize Your Boost
					</h3>
					<p>
						<span className=" text-main-orange font-bold">Select service:</span>{" "}
						Tailor your boost to fit your exact needs. From rank boosting to
						coaching sessions, our diverse range of services is designed to help
						you achieve your gaming goals. Select the service that best suits
						your quest for greatness.
					</p>
				</div>
				{/* step 4 */}
				<div className=" flex flex-col justify-center px-[203px]">
					<h3 className="text-xl font-bold pb-5 underline">Enjoy new view</h3>
					<p>
						<span className=" text-main-orange font-bold">
							Get your new rank:
						</span>{" "}
						Watch as our expert boosters elevate your game. With your goals
						clearly defined and our professionals at your service, achieving
						your desired rank has never been easier. Sit back, relax, and
						prepare to rise to new heights in your gaming journey.
					</p>
				</div>
				<div className="w-full h-[400px] flex justify-center">
					<Image src={step4Image} alt="Complete job image" />
				</div>
				{/* bg image */}
				<Image
					className=" absolute left-1/2 transform -translate-x-1/2 top-5"
					src={stepLine}
					alt="Step guide line"
				/>
			</article>
		</section>
	);
}

type Review = {
	_id: number;
	name: string;
	image: string;
	review: string;
	score: number;
};

const MOCK_CUSTOMER_REVIEWS: Review[] = [
	{
		_id: 1,
		name: "Jack",
		image: "https://placehold.co/200",
		review: "This site is Goodddd",
		score: 5,
	},
	{
		_id: 2,
		name: "Jacky",
		image: "https://placehold.co/200",
		review: "This site is Goodddd",
		score: 5,
	},
	{
		_id: 3,
		name: "Jest",
		image: "https://placehold.co/200",
		review: "This site is Goodddd",
		score: 4,
	},
	{
		_id: 4,
		name: "Josh",
		image: "https://placehold.co/200",
		review: "This site is Goodddd",
		score: 5,
	},
	{
		_id: 5,
		name: "Nick",
		image: "https://placehold.co/200",
		review: "This site is Goodddd",
		score: 3,
	},
	{
		_id: 6,
		name: "Riven",
		image: "https://placehold.co/200",
		review: "This site is Goodddd",
		score: 4,
	},
	{
		_id: 7,
		name: "Sona",
		image: "https://placehold.co/200",
		review: "This site is so Goodddd",
		score: 4,
	},
	{
		_id: 8,
		name: "Annie",
		image: "https://placehold.co/200",
		review: "This site is Goodddd",
		score: 3,
	},
];

function TestimonialsSection() {
	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
	return (
		<section className=" bg-main-white pb-52 flex flex-col items-center">
			<h2 className="section-header">Testimonials</h2>
			<h3 className="underline font-semibold text-2xl pb-16 text-center">
				What Our Clients Say
			</h3>

			<Carousel
				plugins={[plugin.current]}
				opts={{
					align: "start",
				}}
				className="px-32 w-4/5"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent className="pt-16">
					{MOCK_CUSTOMER_REVIEWS.map((customer) => (
						<CarouselItem className="basis-1/3" key={`${customer._id}Card`}>
							<TestimonialCard
								review={customer.review}
								name={customer.name}
								image={customer.image}
								score={customer.score}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNext />
				<CarouselPrevious />
			</Carousel>
		</section>
	);
}

function PricingSection() {
	const currentGame = useSelector(
		(state: RootState) => state.currentGame.currentGame,
	);
	const dispatch = useDispatch();
	const onChangeHandler = (value: string) => {
		dispatch(changeCurrentGame({ currentGame: value }));
	};
	return (
		<section className=" bg-off-gray px-32">
			<h2 className="section-header">Pricing</h2>

			<article className="grid grid-cols-5 ">
				<div className="col-span-2 px-32 ">
					<Select
						defaultValue={currentGame}
						onValueChange={(e) => onChangeHandler(e)}
					>
						<SelectTrigger className="w-[480px] flex justify-center h-[70px] text-4xl font-bold text-main-white text-center bg-main-gray rounded">
							<SelectValue placeholder="Game" />
						</SelectTrigger>
						<SelectContent className="bg-main-white cursor-pointer">
							<SelectItem value="valorant">Valorant</SelectItem>
							<SelectItem value="overwatch2">Overwatch 2</SelectItem>
							<SelectItem value="teamfightTactics">
								Teamfight Tactics
							</SelectItem>
							<SelectItem value="apexLegend">Apex Legend</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="col-span-3 bg-main-gray p-5 rounded">
					<div className="flex justify-between gap-10">
						<Input
							type="text"
							placeholder="Regions"
							className="bg-off-gray rounded border-none placeholder:text-main-gray"
						/>
						<Select>
							<SelectTrigger className="bg-off-gray rounded border-none text-main-gray">
								<SelectValue placeholder="Service" />
							</SelectTrigger>
							<SelectContent className="bg-main-white cursor-pointer">
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</article>
		</section>
	);
}
