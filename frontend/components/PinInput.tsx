// components/PinInput.js

import { useState } from "react";

import React from "react";

type PinInputProps = {
	pinLength?: number;
};

const PinInput = ({ pinLength = 8 }: PinInputProps) => {
	const [pin, setPin] = useState<string>("");

	const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value.length <= pinLength) {
			setPin(value);
		}
	};

	return (
		<div className="flex flex-col items-center bg-pin-pad-background p-2 rounded-[100rem]">
			<div className="flex space-x-2">
				{Array.from({ length: pinLength }).map((_, index) => (
					<div
						key={index}
						className={`w-5 h-5 rounded-full flex items-center justify-center ${
							pin.length > index
								? "bg-written-pin-color"
								: "bg-to-be-written-pin-color"
						}`}
					/>
				))}
			</div>
			<input
				type="password"
				value={pin}
				onChange={handlePinChange}
				maxLength={pinLength}
				className="sr-only" // Hide the input field, as we only need it for managing state
				aria-label="PIN Input"
			/>
		</div>
	);
};

export default PinInput;
