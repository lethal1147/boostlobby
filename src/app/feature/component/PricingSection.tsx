import CheckboxInput from "@/app/components/input/checkbox";
import InputSelect from "@/app/components/input/select";
import { RootState } from "@/app/config/configureStore";
import homePageDropdowns from "@/app/constants/dropdown";
import { ChangeProperty } from "@/app/store/pricingSlice";
import { PricingSliceType } from "@/app/types/homePageType";
import { Separator } from "@/components/ui/separator";
import { useDispatch, useSelector } from "react-redux";

type keyOfPricing = keyof PricingSliceType;

function PricingSection() {
	const pricing = useSelector((state: RootState) => state.pricing);
	const dispatch = useDispatch();
	const onChangeHandler = (key: keyOfPricing, value: string) => {
		dispatch(ChangeProperty({ key, value }));
	};

	return (
		<section className=" bg-off-gray px-32">
			<h2 className="section-header">Pricing</h2>
			<article className="flex">
				<div className=" px-32 flex justify-center">
					<InputSelect
						onChange={(value) => onChangeHandler("game", value as string)}
						value={pricing.game}
						placeholder="Game"
						triggerStyling="min-w-[480px] flex items-center justify-center h-[70px] text-4xl font-bold text-main-white text-center bg-main-gray rounded"
						contentStyling="bg-main-white cursor-pointer"
						options={homePageDropdowns.gameDropdowns}
					/>
				</div>
				<div className="flex-grow bg-main-gray p-5 rounded">
					<div className="flex justify-between gap-5">
						<div className="w-1/2">
							<InputSelect
								onChange={(value) => onChangeHandler("region", value as string)}
								value={pricing.region}
								label="Regions"
								id="regions"
								triggerStyling="bg-off-gray rounded w-full px-10 py-3 border-none placeholder:text-main-gray"
								placeholder="Regions"
								contentStyling="bg-main-white cursor-pointer"
								options={homePageDropdowns.regionDropdowns}
							/>
						</div>
						<div className="w-1/2">
							<InputSelect
								onChange={(value) =>
									onChangeHandler("service", value as string)
								}
								value={pricing.service}
								label="Service"
								id="service"
								triggerStyling="bg-off-gray rounded w-full px-10 py-3 border-none placeholder:text-main-gray"
								placeholder="Service"
								contentStyling="bg-main-white cursor-pointer"
								options={homePageDropdowns.serviceDropdowns}
							/>
						</div>
					</div>
					<Separator className="my-6 bg-off-gray" />
					<div>
						<h4 className="text-off-gray font-semibold">Options</h4>
						<div className="bg-off-gray p-3 rounded">
							<div className=" grid grid-cols-3 gap-x-5 gap-y-3">
								<CheckboxInput
									label="Appear Offline (free)"
									checked={pricing.appearOfflineFlag === "Y"}
									onChange={(value: string) =>
										onChangeHandler("appearOfflineFlag", value)
									}
								/>
								<CheckboxInput
									label="Agent Lock (free)"
									checked={pricing.agentLockFlag === "Y"}
									onChange={(value: string) =>
										onChangeHandler("agentLockFlag", value)
									}
								/>
								<CheckboxInput
									label="Solo Queue (+40%)"
									checked={pricing.soloFlag === "Y"}
									onChange={(value: string) =>
										onChangeHandler("soloFlag", value)
									}
								/>
								<CheckboxInput
									label="Duo Queues (+75%)"
									checked={pricing.duoFlag === "Y"}
									onChange={(value: string) =>
										onChangeHandler("duoFlag", value)
									}
								/>
								<CheckboxInput
									label="Streaming (+15%)"
									checked={pricing.streamFlag === "Y"}
									onChange={(value: string) =>
										onChangeHandler("streamFlag", value)
									}
								/>
								<CheckboxInput
									label="Priority Complete (+75%)"
									checked={pricing.priorityCompleteFlag === "Y"}
									onChange={(value: string) =>
										onChangeHandler("priorityCompleteFlag", value)
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}

export default PricingSection;
