import { useContext } from "react"
import { LabContext } from "."

export default function GrandparentComponent() {
  const labContext = useContext(LabContext)

 if (!labContext) {
  throw new Error("Ahhhhhh")
 }
 const { isOpen, setOpen } = labContext

  const handle = () => {
    console.log('isOpen is: ', isOpen)
  }
  const handleChange = () => {
    setOpen(!isOpen)
  }
  
  return <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#ddd'}}>
      <button onClick={handle}>grandpa, log!</button>
      <button onClick={handleChange}>Change!</button>
    </div>
}