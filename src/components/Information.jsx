import React from 'react'

const Information = ({name,info}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{info}</p>
    </div>
  )
}

export default Information