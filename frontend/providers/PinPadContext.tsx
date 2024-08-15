import React, { createContext, useState } from 'react'

type PinPadContextType = {
  pin: string
  setPin: (pin: string) => void
  addToPin: (value: string) => void
  cancelPin: () => void
}

type PinPadProviderProps = {
  children: React.ReactNode
}

export const PinPadContext = createContext<PinPadContextType>({} as PinPadContextType)

const PinPadProvider = ({children} : PinPadProviderProps) => {
  const [pin, setPin] = useState<string>('')

  const addToPin = (value: string) => {
    setPin((prev) => prev + value)
  }

  const cancelPin = () => {
    setPin('')
  }

  const value = {
    pin,
    setPin,
    addToPin,
    cancelPin
  }

  return (
    <PinPadContext.Provider value={value}>{children}</PinPadContext.Provider>
  )
}

export default PinPadProvider