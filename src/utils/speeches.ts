import fn from './functions.ts'
import { getHours, getMinutes } from 'date-fns'

export type ISpeechMessage = {
  title: string
  body: string
}

export type ISpeech = {
  id: string
  message: ISpeechMessage
  persist?: boolean
  html?: boolean
}

const speeches = [
  {
    id: "001",
    message: {
      title:"World Wide Web!",
      body: "Sabia que é mais rápido falar assim do que pronunciar 'dablio, dablio, dablio'? Mas aqui a gente escreve, não fala.",
    },
    persist: true
  },
  {
    id: "002",
    message: {
      title:"Wow!",
      body: "Look at him!!!",
    },
    persist: false
  },
  {
    id: "003",
    message: {
      title:"Há uma missão secreta no espaço não mapeado!",
      body: "Não é um brinquedo que voa.",
    },
    persist: false
  },
  {
    id: "1",
    message: fn.isItLate,
    persist: true
  },
  {
    id: "2",
    message: {
      title:"Sem pressa!",
      body: "Você pode passar o tempo que quiser falando comigo.\\nVou ficar aqui pra sempre. Mesmo que eu não tenha mais o que dizer e comece a repetir frases.",
    },
    persist: true
  },
  {
    id: "3",
    message: {
      title:"Zero matches.",
      body: "Talvez se eu colocasse uma foto com o Pluto...",
    },
    persist: true
  },
  {
    id: "4",
    message: {
      title:"Reconheça uma fita Disney legítima!",
      body: "Verifique a marca indelével na face superior,\n o selo da UBV na lombada e o holograma com o mickey feiticeiro.",
    },
    persist: true
  },
  {
    id: "5",
    message: {
      title:"мiiickєyziи' 1ØØ иєuяozє _\\|/_",
      body: `🎧 <a href="https://www.youtube.com/watch?v=y6120QOlsfU" target="_blank">kasino_-_cant_get_0ver.mp3</u>`,
    },
    persist: true,
    html: true
  },
  {
    id: "10",
    message: {
      title:"Psst!",
      body: "Tá fazendo muito barulho.",
    },
    persist: true
  },
  {
    id: "11",
    message: {
      title:"Penso, logo existo.",
      body: "Borboletas salpicadas de goiabada.",
    },
    persist: true
  },
  {
    id: "12",
    message: {
      title:"Eu tenho um segredo.",
      body: "Meia-noite eu te conto.",
    },
    persist: true
  },
  {
    id: "13",
    message: fn.instagramDump,
    persist: true
  },
  {
    id: "17",
    message: {
      title:"You hit me 17 times",
      body: "You're now the proud honor of a motorcar emoji 🚗",
    },
    persist: true
  },
  {
    id: "20",
    message: {
      title:"Você viu meu taco de baseball?",
      body: "Escondi ele aqui em algum lugar mas não consigo encontrar...",
    },
    persist: true
  },
  {
    id: "30",
    message: {
      title:"Hackearam meu e-mail",
      body: "Agora lancei esse site tortaonaquelepiquenaomudanada e ponto com, ponto bê-érre",
    },
    persist: true
  },
  {
    id: "50",
    message: {
      title:"Ok",
      body: "Não tenho mais nada por enquanto...",
    },
    persist: true
  },
  {
    id: "51",
    message: {
      title:"Ok!",
      body: "Não tenho mais nada por enquanto...",
    },
    persist: true
  },
  {
    id: "52",
    message: {
      title:"Ok...",
      body: "Não tenho mais nada por enquanto...",
    },
    persist: true
  },
  {
    id: "53",
    message: {
      title:"Vc não aprendeu nada com jogos?",
      body: "Quando NPCs começam a repetir suas falas significa que você esgotou o diálogo completamente.",
    },
    persist: true
  },
  {
    id: "100",
    message: {
      title:"Já chega!!!!!111",
      body: "...",
    },
    persist: true
  },
  {
    id: "150",
    message: {
      title:"AAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      body: "!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    },
    persist: true
  },
  {
    id: "1000",
    message: {
      title:"Acredite em mim",
      body: "Não há ovos de páscoa a partir daqui! 🥚🐰",
    },
    persist: true
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

// Trata e retorna o objeto com as informações da fala
export const getSpeech = (id: string | null): ISpeech | null => {
  
  if (!id)
    return null

  const now = new Date()
  if ((getHours(now) + getMinutes(now)) == 0) {
    console.log('O gato morreu...')
  }
  
  const idNum = Number(id)
  let obj
  const speechIndex = speeches.findIndex(s => s.id == id)
  if (speechIndex > -1) {
    const selectedSpeech = speeches[speechIndex]
    obj = processSpeech(selectedSpeech)
  } else if (id.includes('20')) {
    obj = {id, message: { title: `Você tem certeza que não viu um taco de baseball por aí?`, body: 'Às vezes ele se esconde...'} }
  } else if (id.includes('80')) {
    obj = {id, message: { title: `Dê uma olhada em volta.`, body: 'Alguma coisa aqui deve se parecer com um taco de baseball'} }
  } else {
    obj = {id, message: { title: `${id} cliques...`, body: fn.getRandomEmoji()} }
  }

  return obj
}