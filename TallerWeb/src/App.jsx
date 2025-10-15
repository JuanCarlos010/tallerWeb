import { useState } from 'react'

function App(){
  const [idItem, setIdItem] = useState("");
  const [rresultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const ConsultarAPI = async () => {
    try {
      setErr(null);
      setResultado(null);

      const respuesta = await fetch("http://localhost:3000/dataInfo/idItem") // cambiar idItem por el id del elemento
      if(!respuesta.ok){
        throw new Error("Err En la consulta con el Id: idItem")
      }

      const data = await respuesta.json();
      setResultado(data);
    } catch(err){
      setError(err.mensaje)
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Consulta de Items</h1>
      <input
        type="number"
        placeholder="Ingrese ID del item"
        value={idItem}
        onChange={(e) => setIdItem(e.target.value)}
      />
      <button onClick={consultarAPI} style={{ marginLeft: "10px" }}>
        Consultar
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {resultado && resultado.status && (
        <div style={{ marginTop: "20px" }}>
          <h3>Resultado:</h3>
          <ul>
            <li><strong>ID:</strong> {resultado.item.id}</li>
            <li><strong>Nombre:</strong> {resultado.item.nombre}</li>
            <li><strong>Precio:</strong> ${resultado.item.precio}</li>
            <li><strong>Fecha Respuesta:</strong> {resultado.dateTime}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;