import usePinPad from "@/hooks/usePinPad";
import classNames from "classnames";
import React from "react";

const buttonsTypeToString = (button: ActionButtonType) => {
	switch (button) {
		case "button-cancel":
			return "Cancel";
		case "button-clear":
			return "Clear";
		case "button-enter":
			return "Enter";
		case "no-button":
			return "";
	}
};

const NumberPad = () => {
	const { addToPin } = usePinPad();

	const numberButtons: NumberButtonType[] = [
		{ value: 1, letters: "QZ" },
		{ value: 2, letters: "ABC" },
		{ value: 3, letters: "DEF" },
		{ value: 4, letters: "GHI" },
		{ value: 5, letters: "JKL" },
		{ value: 6, letters: "MNO" },
		{ value: 7, letters: "PQRS" },
		{ value: 8, letters: "TUV" },
		{ value: 9, letters: "WXY" },
		{ value: -1 },
		{ value: 0, letters: "Z" },
		{ value: -1 },
	];

	const actionButtons: ActionButtonType[] | undefined = [
		"button-cancel",
		"button-clear",
		"button-enter",
		"no-button",
	];

	const handleNumberClicked = (button: NumberButtonType) => {
		if (button.value === -1) return;
		addToPin(button.value.toString());
	};

	const handleActionsClicked = (button: ActionButtonType) => {
		switch (button) {
			case "button-cancel":
				console.log("Cancel button clicked");
				break;
			case "button-clear":
				console.log("Clear button clicked");
				break;
			case "button-enter":
				console.log("Enter button clicked");
				break;
			case "no-button":
				break;
		}
	};

	return (
		<div className="w-full h-full bg-background-secondary rounded-[20px] border-[3px] border-black flex items-center justify-center gap-10 font-bold ">
			<div className="grid grid-cols-3 grid-rows-4 gap-4">
				{numberButtons.map((button, index) => (
					<button
						key={index}
						onClick={() => handleNumberClicked(button)}
						className={`relative w-16 h-12 bg-gradient-grey-to-white-to-grey rounded-sm border-[2px] border-black shadow-inner-2xl ${
							button.value === -1 ? "disable cursor-default" : ""
						}`}
					>
						<p className="absolute bottom-[2px] left-1 text-4xl">
							{button.value != -1 && button.value}
						</p>
						<p className="absolute top-0 right-[2px] text-xs">
							{button.letters}
						</p>
					</button>
				))}
			</div>
			<div className="flex flex-col gap-4">
				{actionButtons.map((button, index) => (
					<button
						key={index}
						onClick={() => handleActionsClicked(button)}
						className={classNames(
							"w-16 h-12 rounded-sm border-[2px] border-black shadow-inner-2xl",
							{
								"bg-[#f45c5b]": button === "button-cancel",
								"bg-[#e4e773]": button === "button-clear",
								"bg-[#55cb27]": button === "button-enter",
								"bg-gradient-grey-to-white-to-grey cursor-default disable":
									button === "no-button",
							}
						)}
					>
						<p className="text-center pb-4">{buttonsTypeToString(button)}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default NumberPad;
