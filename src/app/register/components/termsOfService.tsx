import { Button } from "@/app/components/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ImCross } from "react-icons/im";

type TermOfServiceType = {
	setTermsOfService: Dispatch<SetStateAction<boolean>>;
	setIsAgree: Dispatch<SetStateAction<boolean>>;
};

const TermsOfService = ({
	setTermsOfService,
	setIsAgree,
}: TermOfServiceType) => {
	const onClose = () => {
		setTermsOfService(false);
	};

	const onAgreeClick = () => {
		setIsAgree(true);
		setTermsOfService(false);
	};
	return (
		<main className="flex flex-col items-center">
			<div className="flex w-1/2 bg-main-white p-5 rounded flex-col gap-5">
				<div className="flex gap-10 relative">
					<div>
						<svg
							width="104"
							height="119"
							viewBox="0 0 104 119"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Terms Of Services</title>
							<path
								d="M14.8571 0C13.8171 0 12.9257 0.148571 12.0343 0.445714C6.24 1.63429 1.63429 6.24 0.445714 12.0343C0 12.9257 0 13.8171 0 14.8571V96.5714C0 108.903 9.95429 118.857 22.2857 118.857H104V104H22.2857C18.1257 104 14.8571 100.731 14.8571 96.5714C14.8571 92.4114 18.1257 89.1429 22.2857 89.1429H104V7.42857C104 3.26857 100.731 0 96.5714 0H89.1429V44.5714L74.2857 29.7143L59.4286 44.5714V0H14.8571Z"
								fill="#FF7F50"
							/>
						</svg>
					</div>
					<div className="flex flex-col ">
						<h2 className="text-3xl font-bold text-main-orange">
							Terms of Services
						</h2>
						<p className="text-lg font-semibold text-disable-gray">
							Last update : 02/12/2024
						</p>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="absolute top-0 right-0 cursor-pointer"
					>
						<ImCross color="#909090" />
					</button>
				</div>
				<ScrollArea className="h-96">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eos
					placeat explicabo ullam vero exercitationem voluptatem adipisci
					cupiditate blanditiis facilis sunt delectus cum, deserunt laudantium
					quas odit eaque consequuntur iure. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Hic eos placeat explicabo ullam vero
					exercitationem voluptatem adipisci cupiditate blanditiis facilis sunt
					delectus cum, deserunt laudantium quas odit eaque consequuntur iure.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eos
					placeat explicabo ullam vero exercitationem voluptatem adipisci
					cupiditate blanditiis facilis sunt delectus cum, deserunt laudantium
					quas odit eaque consequuntur iure.
					<br />
					<br />
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eos
					placeat explicabo ullam vero exercitationem voluptatem adipisci
					cupiditate blanditiis facilis sunt delectus cum, deserunt laudantium
					quas odit eaque consequuntur iure. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Hic eos placeat explicabo ullam vero
					exercitationem voluptatem adipisci cupiditate blanditiis facilis sunt
					delectus cum, deserunt laudantium quas odit eaque consequuntur iure.
				</ScrollArea>

				<Button
					onClick={onAgreeClick}
					text="Agree"
					className="bg-main-orange text-main-white shadow-lg px-3 py-3 rounded font-bold hover:bg-main-orange-hover-20% transition"
				/>
			</div>
		</main>
	);
};

export default TermsOfService;
