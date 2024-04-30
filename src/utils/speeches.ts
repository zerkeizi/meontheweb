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
    id: "002",
    message: {
      title:"Wow!",
      body: "Look at him!!!",
    },
  },
  {
    id: "1",
    message: fn.isItLate,
  },
  {
    id: "2",
    message: {
      title:"Sem pressa!",
      body: "Você pode passar o tempo que quiser falando comigo.\\nVou ficar aqui pra sempre. Mesmo que eu não tenha mais o que dizer e comece a me repetir.",
    },
  },
  {
    id: "3",
    message: {
      title:"Zero matches.",
      body: "Talvez se eu colocasse uma foto com o Pluto...",
    },
  },
  {
    id: "4",
    message: {
      title:"Reconheça uma fita Disney legítima!",
      body: "Verifique a marca indelével na face superior,\n o selo da UBV na lombada e o holograma com o mickey feiticeiro.",
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
    id: "11",
    message: {
      title:"Penso, logo existo.",
      body: "Borboletas salpicadas de goiabada.",
    },
  },
  {
    id: "12",
    message: {
      title:"Eu tenho um segredo.",
      body: "Meia-noite eu te conto.",
    },
  },
  {
    id: "13",
    message: fn.instagramDump,
  },
  {
    id: "30",
    message: {
      title:"Hackearam meu e-mail",
      body: "Agora lancei esse site tortaopraesquerdanaquelepiquenaomudanada.com.br",
    },
  },
  {
    id: "50",
    message: {
      title:"Ok",
      body: "Não tenho mais nada por enquanto...",
    },
  },
  {
    id: "100",
    message: {
      title:"Já chega!!!!!111",
      body: "...",
    },
  },
  {
    id: "150",
    message: {
      title:"AAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      body: "!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    },
  },
  {
    id: "200",
    message: {
      title:"🚨 Modo NPC burro ativado",
      body: "Nenhum ovo de páscoa a partir daqui! 🥚🐰",
    },
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
  } else {
    return {id, message: { title: `${id} cliques...`, body: fn.getRandomEmoji()} }
  }
}