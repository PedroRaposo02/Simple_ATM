"use client";

import ImageScreen from "@/components/ImageScreen";
import MainScreen from "@/components/MainScreen";
import NumberPad from "@/components/NumberPad";
import PinPadProvider from "@/providers/PinPadContext";

export default function Home() {
	return (
		<main className="w-screen h-screen flex items-center justify-center bg-background-primary">
			<PinPadProvider>
				<div className="flex min-w-[800px] w-[75%] aspect-[16/9] items-center justify-center gap-6">
					<MainScreen />
					<div className="flex flex-col items-center justify-center gap-6 w-[30%] h-full">
						<ImageScreen />
						<NumberPad />
					</div>
				</div>
			</PinPadProvider>
		</main>
	);
}
