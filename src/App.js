import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tech, setTech] = useState([])
  const [newTech, setNewTech] = useState('')



  //--------------------------------------------------------------------------
  // function handleAdd() {
  //   setTech([...tech, newTech])
  //   setNewTech('');
  // }
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

  const techSize = useMemo(() => tech.length, [tech]);
  /* UseMemo é usado quando quero que uma variável altere quando apenas UMA informação é alterada, como a tech por exemplo */

  //--------------------------------------------------------------------------

  /*O useCallback é como o useMemo, mas ele retorna uma function... podemos trocar pela funtion handleAdd, para gastar menos processamento */
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech])
    setNewTech('');
  }, [tech, newTech])

  //--------------------------------------------------------------------------





  return (
    <>

      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <strong>Você tem {techSize} tecnologias </strong> <br />

      <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </>
  );
}

export default App;
