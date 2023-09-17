import React from 'react'
import '../css/toggle.css' 

const ToggleSwitch = () => {
  return (
    <>
        <input type="checkbox" name="checkbox" id="toggle" checked/>
        <label for="toggle" className="switch"></label>
    </>
  )
}

export default ToggleSwitch