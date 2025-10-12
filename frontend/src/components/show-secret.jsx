import { useState } from "react";

function SecretViewer() {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/api/reveal/?key=${key}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok && response.status === 404) {
        throw new Error('La llave no existe o ya expiró.');
      }

      return response.json();
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setMessage("");
    try {
      const response = await fetchData();
      const revealedMessage = response.value;
      setMessage(revealedMessage);
      setKey('');
    } catch (error) {
      console.error('Error al revelar el secreto:', error);
      setError("Error al revelar el secreto: " + error.message);
    }
  }

  return (
    <>
      <h2>Mostrar Mensaje Secreto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Clave:</label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <button type="submit">Revelar</button>
        </div>
        <div>
          <label>Mensaje:</label>
          <input
            type="text"
            value={message || ''}
            readOnly={true}
          />
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}

export default SecretViewer;
