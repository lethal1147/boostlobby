"use client";
import HeroSection from "./feature/component/HeroSection";
import HowToSection from "./feature/component/HowToSection";
import PricingSection from "./feature/component/PricingSection";
import TestimonialsSection from "./feature/component/TestimonialsSection";

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
