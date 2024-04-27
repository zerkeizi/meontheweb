'use client'
import Cover from "@/components/Cover";
import { useState } from "react";
import { MouseContext } from '@/context/MouseContext'

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