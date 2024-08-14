import React from "react";
import Screen from "./Screen";

const MainScreen = () => {
	let leftSideButtons = ["1", "2", "3", "4"];
	let rightSideButtons = ["1", "2", "3", "4"];

	return (
		<div className="w-[75%] h-full bg-background-secondary rounded-[20px] border-[3px] border-black flex gap-8 py-16 px-8">
			<div className="flex flex-col h-full items-center justify-end pb-2 gap-10">
				{leftSideButtons.map((button, index) => (
						<button
							key={index}
							className="w-16 h-20 bg-gradient-grey-to-white-to-grey rounded-md border-[3px] border-black shadow-inner-2xl"
						/>
					))}
			</div>

			<Screen />

			<div className="flex flex-col h-full items-center justify-end pb-2 gap-10">
				{rightSideButtons.map((button, index) => (
						<button
							key={index}
							className="w-16 h-20 bg-gradient-grey-to-white-to-grey rounded-md border-[3px] border-black shadow-inner-2xl"
						/>
					))}
			</div>
		</div>
	);
};

export default MainScreen;
