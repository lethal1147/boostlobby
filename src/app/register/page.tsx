import { Separator } from "@/components/ui/separator";
import { Button } from "../components/button";

export default function Register() {
	return (
		<main className="h-screen w-screen bg-main-gray text-main-gray flex items-center justify-center flex-col gap-5">
			<>
				<h1 className="text-main-white text-6xl font-bold mb-10">
					Start Your Journey
				</h1>
				<div className="grid grid-cols-12 bg-main-white shadow-lg py-10 px-14 max-w-[850px] gap-10 rounded">
					<div className="col-span-12 flex place-self-center">
						<div className="w-20 h-20 bg-main-orange rounded-full flex justify-center items-center">
							<p className="text-main-white font-bold text-3xl">1</p>
						</div>
						<div className="w-32 h-0.5 border-t-4 border-dashed self-center" />
						<div className="w-20 h-20 bg-off-gray rounded-full flex justify-center items-center">
							<p className="text-main-white font-bold text-3xl">2</p>
						</div>
					</div>
					<h2 className="text-3xl font-semibold text-main-orange col-span-12 text-center">
						Select Your Role
					</h2>
					<div className=" col-span-5 flex justify-center flex-col gap-5">
						<h3 className="text-center text-xl font-semibold">Customer</h3>
						<div className="text-center tracking-tight mb-6">
							Choose this path if you&apos;re looking to boost your rank, hone
							your skills, or conquer new challenges. As a customer, a world of
							expertise and support awaits you.
						</div>
						<Button
							className="bg-main-orange text-main-white shadow-lg px-3 mx-8 py-3 rounded font-bold hover:bg-main-orange-hover-20% transition"
							text="Level Up My Game"
						/>
					</div>
					<Separator className="col-span-2 h-full w-[2px] mx-auto bg-main-orange" />
					<div className=" col-span-5 flex justify-center flex-col gap-5">
						<h3 className="text-center text-xl font-semibold">Customer</h3>
						<div className="text-center tracking-tight mb-6">
							Choose this path if you&apos;re looking to boost your rank, hone
							your skills, or conquer new challenges. As a customer, a world of
							expertise and support awaits you.
						</div>
						<Button
							className="bg-main-orange text-main-white shadow-lg px-3 mx-8 py-3 rounded font-bold hover:bg-main-orange-hover-20% transition"
							text="Level Up My Game"
						/>
					</div>
				</div>
			</>
		</main>
	);
}
