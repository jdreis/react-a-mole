import { useState }from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer( {setScore, score} ) {
    let [theMole, setTheMole] = useState(false)

    const handleClick = () => {
        setScore(score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setTheMole={setTheMole} handleClick={handleClick}/> : <EmptySlot setTheMole={setTheMole} />
        return (
            <>{displayMole}</>
        )
}

export default MoleContainer