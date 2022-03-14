import { useEffect } from 'react'
import mole from '../images/mole.png'

function Mole({ handleClick, setTheMole }) {
  useEffect( () => {
      let randomTime = Math.round(Math.random() * 5000)
      let timer = setTimeout(() => {
          setTheMole(false)
      }, randomTime )

      return () => clearTimeout(timer)
  })

  return (
      <span>
          <img src={mole} alt="Mole Image" onClick={handleClick} />
      </span>
  )
}

export default Mole