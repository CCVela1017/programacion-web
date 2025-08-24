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
        <h2>{id}</h2>
        <h3>{title}</h3>
        <button className="state-btn" onClick={() => changeState("✓ Completada")}>{state}</button>
        <button className="card-btn" onClick={() => onDelete(id)}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </>
  )
}

export default Assignment