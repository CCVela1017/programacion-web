import { useState } from "react";

function SecretCreator() {
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");

  const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: value }),
      });

      return response.json();
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchData();
      const generatedKey = response.key;
      setKey(generatedKey);
      setValue('');
    } catch (error) {
      console.error('Error al crear el secreto:', error);
    }
  }

  return (
    <>
      <h2>Crear Mensaje Secreto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mensaje:</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Crear</button>
        </div>
        <div>
          <label>Clave:</label>
          <input
            type="text"
            value={key}
            readOnly={true}
          />
        </div>
      </form>
    </>
  )
}

export default SecretCreator;
