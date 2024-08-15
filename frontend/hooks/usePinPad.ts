import { PinPadContext } from "@/providers/PinPadContext"
import { useContext } from "react"

const usePinPad = () => {
  const pinContext = useContext(PinPadContext)
  if (!pinContext) {
    throw new Error("usePinPad must be used within a PinPadProvider")
  }
  return pinContext
}

export default usePinPad;