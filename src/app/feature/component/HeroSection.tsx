import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import mainImage from "/src/app/assets/hero-image.png";
import { Button } from "../../components/button";
import ServiceCard from "./SecviceCard";

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

export default HeroSection;
