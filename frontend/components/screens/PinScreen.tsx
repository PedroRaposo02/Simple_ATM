"use client";

import Image from "next/image";
import React from "react";
import PinInput from "../PinInput";

const PinScreen = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<div className="w-full flex items-center justify-between">
				<Image
					src="/images/pin-pad.png"
					alt="Pin Screen"
					width={300}
					height={300}
					className="pt-5 pl-5"
				/>
				<div className="w-full flex items-center justify-center flex-col space-y-5">
					<p className="text-3xl text-wrap text-center text w-[50%] flex-1">
						Please enter your PIN
					</p>
					<PinInput />
				</div>
			</div>
			<div className="w-full flex flex-col justify-around items-center child:w-full child:text-center mt-10 text-3xl gap-2 h-full">
				<p>Keep your PIN confidential</p>
				<p className="tracking-widest">
					---------------------------------------------
				</p>
				<p>To cancel the transaction, press 'CANCEL'</p>
			</div>
		</div>
	);
};

export default PinScreen;
