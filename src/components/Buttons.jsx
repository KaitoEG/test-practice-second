import React from 'react'
import imagen from "../assets/Vector.png"
import "./Buttons.css"

const Buttons = () => {
  return (
    <div className='buttons'>
        <button>Follow</button>
        <button>
            <img src={imagen} alt="" />
        </button>
    </div>
  )
}

export default Buttons