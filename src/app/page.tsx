'use client'
import Cover from "@/components/Cover";
import { useState } from "react";
import { MouseContext } from '@/context/MouseContext'


export default function Home() {
  const [isSpeaking, setSpeaking] = useState<boolean>(false)
  const [speechId, setSpeechId] = useState<string | null>(null)
  const [speechOption, setSpeechOption] = useState<string>("")
  const [isBaseballMode, setBaseballMode] = useState<boolean>(false)
  const [isAlive, setAlive] = useState(true)

  return (
    <main>
      <MouseContext.Provider value={{ 
          isSpeaking,
          speechId,
          speechOption,
          isBaseballMode,
          isAlive,
          setSpeaking,
          setSpeechId,
          setSpeechOption,
          setBaseballMode,
          setAlive
        }}>
        <Cover/>
      </MouseContext.Provider>
    </main>
  );
}