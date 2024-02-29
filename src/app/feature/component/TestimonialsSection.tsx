import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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

import TestimonialCard from "./TestimonialCard";

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

export default TestimonialsSection;
