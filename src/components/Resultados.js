import React, { useContext } from 'react'
import CalculatorContext from '../context/CalculatorContext'
import ThemeContext from '../context/ThemeContext'

const Resultados = () => {

    const {resultado} = useContext(CalculatorContext)
    const {Input} = useContext(ThemeContext)

    return (
        <Input 
        type="text" 
        placeholder='0' 
        readOnly
        alignEnd
        value={resultado}
        />
    )
}

export default Resultados
