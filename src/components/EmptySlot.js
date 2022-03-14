import { useEffect } from 'react'
import moleHill from '../images/molehill.png'

function EmptySlot({ setTheMole }) {
  useEffect(() => {
    let randomTime = Math.round(Math.random() * 3000)
    let timer = setTimeout(() => {
      setTheMole(true)
    }, randomTime)

    return () => clearTimeout(timer)
  })

  return (
    <span>
      <img src={moleHill} alt="Image of Hill" />
    </span>
  )
}

export default EmptySlot