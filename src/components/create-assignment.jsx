import { useState } from 'react'

function AssignmentGenerator({ onDataSend }) {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("");

  const sendNewAssignment = () => {
    if (title.trim() !== "") {
      const newAssignment = { 
        id: count, 
        title: title, 
        cState: "Pendiente"
      };
      onDataSend(newAssignment);
    }
  }

  return (
    <>
      <div className="create-assignment">
        <h2>Crear nueva tarea</h2>
        <input 
          type="text" 
          placeholder="Título de la tarea" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <button onClick={() => {
          if (title.trim() !== "") {
            setCount(count + 1);
            sendNewAssignment();
            setTitle("");
          }
        }}>
          Añadir Tarea
        </button>
      </div>
    </>
  )
  
}

export default AssignmentGenerator