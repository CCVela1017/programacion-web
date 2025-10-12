import { useState } from 'react'
import SecretCreator from './create-secret.jsx'
import SecretViewer from './show-secret.jsx'


function Home() {
  const [activeTab, setActiveTab] = useState('create');

  const renderTabs = () => {
    switch (activeTab) {
      case 'create':
        return <SecretCreator />;
      case 'show':
        return <SecretViewer />;
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