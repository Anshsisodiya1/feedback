import React from 'react'

const ChildCompo = ({todo,handleClick}) => {
  return (
    <>
    <ul>
    {todo.map((item, index) => (
        <li key={index}>
            {item.text} || {item.dept} || {item.rank}
        </li>
    ))}
</ul>
<button onClick={handleClick}>Back</button>
</>
  )
}

export default ChildCompo