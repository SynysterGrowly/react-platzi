import React from 'react'


function TodoItem(props) {

  const onComplete = () => {
    alert('Ya completas el todo' + props.text)
  }

  const onDelete = () => {
    alert('Ya borraste el' + props.text)
  }

  return (
    <>
      <li>
        <span
          onClick={onComplete}
        >C</span>
        <p>{props.text}</p>
        <span
          onClick={onDelete}
        >X</span>
      </li>
    </>
  )
}

export { TodoItem }
