type ISpeech = {
  id: number
  title: string
  body: string
}

export const speeches: ISpeech[] = [
  {
    id: 1,
    title:"Hey!",
    body: "did you know it's faster to spell it in full than it is to say 'dublio, dublio, dublio'?\\nbut I'm typing here, not speaking."
  },
  {
    id: 2,
    title:"Psst!",
    body: "You are making too much noise."
  }
]
