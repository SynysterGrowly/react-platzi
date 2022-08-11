import React from 'react'


function CreateTodoButton(props) {

  const onClickButton = (msg) => {
    alert(msg);
  }


  return (
    <>
      <button
        onClick={() => onClickButton('Estoy en una arrow function dentro de otra arrow')} //envolvemos la arrow function dentro de otra
      >

        +

      </button>
    </>
  )
}

export { CreateTodoButton }
