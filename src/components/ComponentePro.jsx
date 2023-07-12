import { useState } from 'preact/hooks'
import React from 'react'

export const ComponentePro = () => {

  const [numero, setnumero] = useState(0)

  const incrementar = () => {
    setnumero((numero + 1));
  }

  return (
    <>
      <button onClick={incrementar}>~picale aqui~ uwu</button><br />
      <label> { numero } </label><br />
      <button onClick={() => { setnumero(0) }}>muerele la suma &gt;:c</button><br />

    </>
  )
}
