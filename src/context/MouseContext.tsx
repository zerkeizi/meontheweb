import { createContext } from "react";

export interface MouseContextType {
  isSpeaking: boolean
  speechId: string | null
  speechOption: string
  isBaseballMode: boolean
  isAlive: boolean
  setSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
  setSpeechId: React.Dispatch<React.SetStateAction<string | null>>;
  setSpeechOption: React.Dispatch<React.SetStateAction<string>>;
  setBaseballMode: React.Dispatch<React.SetStateAction<boolean>>;
  setAlive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MouseContext = createContext<MouseContextType | undefined>(undefined);