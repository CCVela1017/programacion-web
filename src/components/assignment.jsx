import { useState } from 'react'

function Assignment({id, title, onDelete}) {
  const [state, setState] = useState("Pendiente");

  return (
    <>
      <div className="assignment">
        <p>{id}</p>
        <h3>{title}</h3>
        <button onClick={() => setState("✓ Completada")}>{state}</button>
        <button onClick={() => onDelete(id)}>Eliminar</button>
      </div>
    </>
  )
}

export default Assignment