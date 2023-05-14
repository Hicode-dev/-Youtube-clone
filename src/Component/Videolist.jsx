import React from 'react'

const Videolist = () => {
  function Greeting() {
    const [name, setName] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    }
  
    const handlePrint = () => {
      console.log(`Good morning, ${name}! How was your night?`);
    }
  return (
    <div>
      
    </div>
  )
}
}
export default Videolist
