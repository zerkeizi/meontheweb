import { createContext, useContext, useState } from 'react'
import './style.css'
import GrandparentComponent from './GrandparentComponent'

// Testando o uso do context

interface LabContextType {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LabContext = createContext<LabContextType | undefined>(undefined)

export default function About() {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <main>
      <LabContext.Provider value={{ isOpen, setOpen }}>
        <GrandparentComponent/>
      </LabContext.Provider>
    </main>
  )
}