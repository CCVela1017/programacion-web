import { useState } from 'react'

function AssignmentFilter({ onFilter }) {
  const [state, setState] = useState("Todas las tareas");

  return (
    <>
      <div className="filter-assignments">
        <h2>Filtrar tareas</h2>
        <select value={state} onChange={(e) => {
          setState(e.target.value);
          onFilter(e.target.value);
        }}>
          <option value="Todas las tareas">Todas las tareas</option>
          <option value="Pendiente">Pendientes</option>
          <option value="✓ Completada">Completadas</option>
        </select>
      </div>
    </>
  )
}

export default AssignmentFilter