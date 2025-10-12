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
      <h1>Mensajes Secretos</h1>
      <p>Bienvenido a la aplicación de mensajes secretos.</p>

      <div className='tab-section'>
        <button className='tab-left' onClick={() => setActiveTab('create')}>
          Crear mensaje
        </button>
        <button className='tab-right' onClick={() => setActiveTab('show')}>
          Mostrar mensaje
        </button>
      </div>
      <div>{renderTabs()}</div>
    </>
  )
}

export default Home