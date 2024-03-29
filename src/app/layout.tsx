import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "./components/navBar";
import { Providers } from "./context/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Boost Lobby",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Providers>
			<html lang="en">
				<body className={inter.className}>
					<main className=" max-w-screen ">{children}</main>
				</body>
			</html>
		</Providers>
	);
}
