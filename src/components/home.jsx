import { useState } from 'react'
import Assignment from './assignment.jsx'
import AssignmentGenerator from './create-assignment.jsx';
import AssignmentFilter from './filter-assignments.jsx';

function Home() {
  const [allAssignments, setAllAssignments] = useState([]);

  const [assignments, setAssignments] = useState(allAssignments);

  const deleteAssignment = (id) => {
    const updated = allAssignments.filter(a => a.id !== id);
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

  const onStateChange = (id, newState) => {
    const updated = allAssignments.map(a => {
      if (a.id === id) {
        return { ...a, cState: newState };
      }
      return a;
    }
    );
    setAllAssignments(updated);
    setAssignments(updated);
  };

  return (
    <>
      
      <div className="home">

        <div className="left">
          <h1 className='title-1'>Manejador de tareas</h1>
          <AssignmentGenerator onDataSend={(newAssignment) => {
            setAllAssignments([...allAssignments, newAssignment])
            setAssignments([...assignments, newAssignment])
          } } />
          <AssignmentFilter onFilter={onFilter} />
        </div>
        
        <div className="right">
          <h1>Mis Tareas</h1>
          {assignments.map(assignment => (
            <Assignment 
              key={assignment.id} 
              id={assignment.id} 
              title={assignment.title} 
              cState={assignment.cState}
              onStateChange={onStateChange}
              onDelete={deleteAssignment} 
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default Home
