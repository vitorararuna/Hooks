import React, { useState, useEffect } from 'react';

function App() {

  const [tech, setTech] = useState([])
  const [newTech, setNewTech] = useState('')



  //--------------------------------------------------------------------------
  function handleAdd() {
    setTech([...tech, newTech])
    setNewTech('');
  }
  //--------------------------------------------------------------------------

  useEffect(() => {
    const storageTech = localStorage.getItem('tech')

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []) /* Só vai ser executado uma vez, quando a aplicação for aberta */

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]) /* Vai ser executada quando o state tech for alterado */

  //--------------------------------------------------------------------------








  return (
    <>

      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </>
  );
}

export default App;
