'use client'
import Cover from "@/components/Cover";
import { ReactNode, createContext, useState } from "react";


export interface MouseContextType {
  isSpeaking: boolean
  speechId: string | null
  speechOption: string
  isBaseballMode: boolean
  setSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
  setSpeechId: React.Dispatch<React.SetStateAction<string | null>>;
  setSpeechOption: React.Dispatch<React.SetStateAction<string>>;
  setBaseballMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MouseContext = createContext<MouseContextType | undefined>(undefined);

export default function Home() {
  const [isSpeaking, setSpeaking] = useState<boolean>(false)
  const [speechId, setSpeechId] = useState<string | null>(null)
  const [speechOption, setSpeechOption] = useState<string>("")
  const [isBaseballMode, setBaseballMode] = useState<boolean>(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MouseContext.Provider value={{ 
          isSpeaking,
          speechId,
          speechOption,
          isBaseballMode,
          setSpeaking,
          setSpeechId,
          setSpeechOption,
          setBaseballMode
        }}>
        <Cover/>
      </MouseContext.Provider>
    </main>
  );
}