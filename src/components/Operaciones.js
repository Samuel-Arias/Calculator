import React, { useContext } from 'react'
import CalculatorContext from '../context/CalculatorContext'
import ThemeContext from '../context/ThemeContext'

const Operaciones = () => {

    const {numOperacion} = useContext(CalculatorContext)
    const {Input} = useContext(ThemeContext)

    return (
        <Input 
        type="text" 
        placeholder='¡Calcula!'
        value={numOperacion}
        readOnly
        />
    )
}

export default Operaciones
