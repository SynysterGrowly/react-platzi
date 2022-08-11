import React from 'react'


function TodoSearch() {

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      <input
        placeholder='Cebolla'
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }//Obligaa al equipo a trabajar con el nombre de ese componente
