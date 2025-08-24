import { useState } from 'react'

function Assignment({id, title, cState, onStateChange, onDelete}) {
  const [state, setState] = useState(cState);

  const changeState = (newState) => {
    setState(newState);
    onStateChange(id, newState);
  }

  return (
    <>
      <div className="assignment">
        <p>{id}</p>
        <h3>{title}</h3>
        <button onClick={() => changeState("✓ Completada")}>{state}</button>
        <button onClick={() => onDelete(id)}>Eliminar</button>
      </div>
    </>
  )
}

export default Assignment