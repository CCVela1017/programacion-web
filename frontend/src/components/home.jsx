import { useState } from 'react'


function Home() {
  const [activeTab, setActiveTab] = useState('create');

  const renderTabs = () => {
    switch (activeTab) {
      case 'create':
        return <div>Create Message Component</div>;
      case 'show':
        return <div>View Messages Component</div>;
      default:
        return null;
    }
  }

  return (
    <>
      <h1>Mensajes secretos</h1>
      <p>Bienvenido a la aplicación de mensajes secretos.</p>

      <div>
        <button onClick={() => setActiveTab('create')}>
          Crear mensaje
        </button>
        <button onClick={() => setActiveTab('show')}>
          Mostrar mensaje
        </button>
      </div>
      <div>{renderTabs()}</div>
    </>
  )
}

export default Home