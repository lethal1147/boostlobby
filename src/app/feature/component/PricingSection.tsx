import { RootState } from "@/app/config/configureStore";
import { changeCurrentGame } from "@/app/store/currentGameSlice";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@radix-ui/react-select";
import { useDispatch, useSelector } from "react-redux";

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

export default PricingSection;
