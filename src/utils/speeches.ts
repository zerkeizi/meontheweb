import fn from './functions.ts'

export type ISpeechMessage = {
  title: string
  body: string
}

export type ISpeech = {
  id: string
  message: ISpeechMessage
}

const speeches = [
  {
    id: "001",
    message: {
      title:"World Wide Web!",
      body: "Sabia que é mais rápido falar assim do que pronunciar 'dablio, dablio, dablio'? Mas aqui a gente escreve, não fala.",
    },
  },
  {
    id: "1",
    message: {
      title:"Sem pressa!",
      body: "Você pode passar o tempo que quiser falando comigo.\\nVou ficar aqui pra sempre. Mesmo que eu não tenha mais o que dizer e comece a me repetir.",
    },
  },
  {
    id: "10",
    message: {
      title:"Psst!",
      body: "Tá fazendo muito barulho.",
    },
  },
  {
    id: "15",
    message: {
      title:"Penso, logo existo.",
      body: "Borboletas salpicadas de goiabada.",
    },
  },
  {
    id: "2",
    message: fn.isItLate,
  },
  {
    id: "17",
    message: fn.instagramDump,
  },
]

/* 
 * Caso haja função na propriedade message, este método 
 * a processa e retorna o conteúdo na forma do objeto esperado
 */
const processSpeech = (str: any) => {
  if (str) {
    if (typeof str.message == 'function') {
      str.message = str.message()
      return str.message ? str as ISpeech : null
    } else {
      return str
    }
  } else {
    return null
  }
}

export const getSpeech = (id: string | null): ISpeech | null => {
  
  if (!id) {
    return null
  } 

  const speechIndex = speeches.findIndex(s => s.id == id)
  if (speechIndex != -1) {
    const selectedSpeech = speeches[speechIndex]

    return processSpeech(selectedSpeech)
  }
  return null
}
