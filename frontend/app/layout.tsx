import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PinPadProvider from "@/providers/PinPadContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Simple ATM",
	description: "ATM with simple accounts and deposit and withdraw features",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
