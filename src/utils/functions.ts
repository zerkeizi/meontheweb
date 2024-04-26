import { getHours, getMonth } from 'date-fns'
import { ISpeechMessage } from './speeches'

const months = {
  pt: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  en:[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
};


const isItLate = () => {
  const d = new Date()
  const currentHour = getHours(d)
  
  let speechObj: ISpeechMessage | null = null
  if (currentHour > 22 || currentHour < 4) {
    speechObj = {
      title:"Já é tarde!",
      body: "Vá descansar. Eu ainda estarei aqui amanhã quando você acordar.",
    }
  }

  if (currentHour >= 20 && currentHour <= 21) {
    speechObj = {
      title:"*Bocejo*",
      body: "Bom dia! Fiquei acordado esperando por você. Espero que tenha um lindo dia.",
    }
  }

  return speechObj
}

const instagramDump = () => {
  let speechObj: ISpeechMessage | null = null
  const d = new Date()
  const currentMonthIndex = getMonth(d)
  const currentMonth = months.pt[currentMonthIndex].toLocaleLowerCase()
  speechObj = {
    title: "*Ansioso*",
    body: `Mal posso esperar pra ver as fotos do seu dump de ${currentMonth} no insta.`
  }

  return speechObj
}

const functions = {
  isItLate: isItLate,
  instagramDump: instagramDump
}

export default functions