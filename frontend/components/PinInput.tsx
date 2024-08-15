// components/PinInput.js

import usePinPad from "@/hooks/usePinPad";
import { useState } from "react";

import React from "react";

type PinInputProps = {
	pinLength?: number;
};

const PinInput = ({ pinLength = 8 }: PinInputProps) => {
	const { pin } = usePinPad();

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
			
		</div>
	);
};

export default PinInput;
