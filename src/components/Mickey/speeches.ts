export type ISpeech = {
  id: string
  title: string
  body: string
  special?: boolean
}

const getTime = () => {
  const t = true

  if (t) {
    return 
  }
}

export const speeches: ISpeech[] = [
  {
    id: "001",
    title:"World Wide Web!",
    body: "Sabia que é mais rápido falar assim do que pronunciar 'dablio, dablio, dablio'? Mas aqui a gente escreve, não fala."
  },
  {
    id: "1",
    title:"Sem pressa!",
    body: "Você pode passar o tempo que quiser falando comigo.\\nVou ficar aqui pra sempre. Mesmo que eu não tenha mais o que dizer e eu comece a me repetir."
  },
  {
    id: "10",
    title:"Psst!",
    body: "Tá fazendo muito barulho."
  },
  {
    id: "15",
    title:"Penso, logo existo.",
    body: "Borboletas salpicadas de goiabada."
  },
  {
    id: "17",
    title:"Já é tarde...",
    body: "Mas eu ainda estarei aqui quando você acordar."+getTime(),
    special: true
  },
]

export const getSpeech = (id: string) => {
  
  const speechIndex = speeches.findIndex(s => s.id == id)
  if (speechIndex != -1) {
    const selectedSpeech = speeches[speechIndex]

    if (selectedSpeech.special) {

    }
  }
}



const specialMap = [
  {
    id: "2",
    fn: getTime()
  }
]