"use client";
import StarRating from "@/app/components/starRating";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function TestimonialCard({
	image,
	review,
	name,
	score = 0,
}: TestimonialCardType) {
	return (
		<Card className="relative col-span-1 min-h-48 bg-main-gray text-main-white px-4 pt-16 rounded shadow-md">
			<CardHeader className="absolute left-1/2 transform -translate-x-1/2 -top-[4.5rem]">
				<Avatar className="w-24 h-24 border-main-white border-4 rounded-full">
					<AvatarImage
						className="rounded-full"
						src={image}
						alt="Clients's image"
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</CardHeader>
			<CardContent>{review}</CardContent>
			<CardFooter className="flex justify-between pt-5">
				<span>{name}</span>
				<StarRating readOnly score={score} />
			</CardFooter>
		</Card>
	);
}

type TestimonialCardType = {
	image: string;
	review: string;
	name: string;
	score?: number;
};
