import { useState } from 'react'
import Assignment from './assignment.jsx'
import AssignmentGenerator from './create-assignment.jsx';
import AssignmentFilter from './filter-assignments.jsx';

function Home() {
  const [allAssignments, setAllAssignments] = useState([
    {id: 1, title: "Mi primera tarea", cState: "Pendiente"},
    {id: 2, title: "Mi segunda tarea", cState: "Pendiente"},
    {id: 3, title: "Mi tercera tarea", cState: "Pendiente"}
  ]);

  const [assignments, setAssignments] = useState(allAssignments);

  const deleteAssignment = (id) => {
    const updated = allAssignments.filter(a => a.id !== id);
    setAllAssignments(updated);
    setAssignments(updated);
  };

  const onStateChange = (id, newState) => {
    const updated = allAssignments.map(a =>
      a.id === id ? { ...a, cState: newState } : a
    );
    setAllAssignments(updated);
    setAssignments(updated);
  };

  const onFilter = (filter) => {
    if (filter === "Todas las tareas") {
      setAssignments(allAssignments);
    } else {
      setAssignments(allAssignments.filter(a => a.cState === filter));
    }
  };

  return (
    <>
      <div className="home">

        <div className="left">
          <AssignmentGenerator onDataSend={(newAssignment) => setAssignments([...assignments, newAssignment])} />
          <AssignmentFilter onFilter={onFilter} />
        </div>
        
        <div className="right">
          <h1>Mis tareas</h1>
          {assignments.map(assignment => (
            <Assignment 
              key={assignment.id} 
              id={assignment.id} 
              title={assignment.title} 
              cState={assignment.cState}
              onDelete={deleteAssignment} 
              onStateChange={onStateChange}
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default Home
