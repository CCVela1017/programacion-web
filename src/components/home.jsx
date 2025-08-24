import { useState } from 'react'
import Assignment from './assignment.jsx'
import AssignmentGenerator from './create-assignment.jsx';

function Home() {
  const [assignments, setAssignments] = useState([
    {id: 1, title: "Mi primera tarea"},
    {id: 2, title: "Mi segunda tarea"},
    {id: 3, title: "Mi tercera tarea"}
  ]);

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter(assignment => assignment.id !== id));
  };

  return (
    <>
      <div className="home">
        <AssignmentGenerator onDataSend={(newAssignment) => setAssignments([...assignments, newAssignment])} />
        <h1>Mis tareas</h1>
        {assignments.map(assignment => (
          <Assignment key={assignment.id} id={assignment.id} title={assignment.title} onDelete={deleteAssignment} />
        ))}
      </div>
    </>
  )
}

export default Home
