import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MAIN_ORANGE, MAIN_WHITE } from "../constants/color";

type StarRatingProps = {
	score: number;
	readOnly?: boolean;
};

export default function StarRating({
	score,
	readOnly = false,
}: StarRatingProps) {
	const [rating, setRating] = useState<number>(score ?? 0);
	const [isHover, setIsHover] = useState<number>(0);
	return (
		<div className="flex">
			{Array.from({ length: 5 }).map((_, index) => {
				const currentRating = index + 1;
				return (
					<label key={`Star${currentRating}`}>
						<input
							className="hidden"
							value={currentRating}
							onClick={() => setRating(currentRating)}
							type="radio"
							name="rating"
							disabled={readOnly}
						/>
						<FaStar
							className=" cursor-pointer"
							size={15}
							color={
								currentRating <= (isHover || rating) ? MAIN_ORANGE : MAIN_WHITE
							}
							onMouseEnter={
								!readOnly ? () => setIsHover(currentRating) : undefined
							}
							onMouseLeave={!readOnly ? () => setIsHover(0) : undefined}
						/>
					</label>
				);
			})}
		</div>
	);
}
