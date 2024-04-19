'use client'
import Cover from "@/components/Cover";
import { createContext, useState } from "react";

const MouseContext = createContext({});

export default function Home() {
  const [isOpen, setIsOpen] = useState();
  const [isSpeaking, setSpeaking] = useState<boolean>(false)
  const [speechOption, setSpeechOption] = useState<string>("")
  const [isBaseballMode, setBaseballMode] = useState<boolean>(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MouseContext.Provider value={{ 
          isOpen,
          isSpeaking,
          speechOption,
          isBaseballMode
        }}>
        <Cover/>
      </MouseContext.Provider>
    </main>
  );
}
