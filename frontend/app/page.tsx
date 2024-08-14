import ImageScreen from "@/components/ImageScreen";
import MainScreen from "@/components/MainScreen";
import NumberPad from "@/components/NumberPad";

export default function Home() {
	return (
		<main className="w-screen h-screen flex items-center justify-center bg-background-primary">
			<div className="flex w-[75%] h-[70%] items-center justify-center gap-6">
				<MainScreen />
				<div className="flex flex-col items-center justify-center gap-6 w-[30%] h-full">
					<ImageScreen />
					<NumberPad />
				</div>
			</div>
		</main>
	);
}
