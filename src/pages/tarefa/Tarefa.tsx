import { useEffect, useState } from "react"

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if(completed){
      setTarefa('Parabéns!, Tarefa Concluída!')
    }else{
      setTarefa('')
    }
  }, [completed])


  return (
    <>
    <h2>Componente Tarefa</h2>

    <h3>{tarefa}</h3>

    <p>Conclua a tarefa</p>

    <button onClick={() => setCompleted(true)}>Concluir a tarefa</button>
    </>
  )
}

export default Tarefa