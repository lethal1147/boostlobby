import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import step1Image from "/src/app/assets/6333050-removebg-preview.png";
import step4Image from "/src/app/assets/Completed-pana.png";
import step2Image from "/src/app/assets/Criticalthinking-pana.png";
import step3Image from "/src/app/assets/Mobiletesting-pana.png";
import mainImage from "/src/app/assets/hero-image.png";
import stepLine from "/src/app/assets/stepLine.png";
import { Button } from "./components/button";

export default function Home() {
	return (
		<main className=" bg-main-white">
			<HeroSection />
			<HowToSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="grid grid-cols-2 py-24 px-10 h-[880px]">
			<div className="col-span-1 flex justify-center">
				<Image className="w-full" src={mainImage} alt="Gaming" />
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
			<h2 className="font-bold text-3xl py-20 text-center">How to Get Start</h2>
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
