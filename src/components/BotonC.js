import React, { useContext } from 'react'
import CalculatorContext from '../context/CalculatorContext'
import { switchBotones } from '../context/switchBoton'
import ThemeContext from '../context/ThemeContext'

const BotonC = ({value, name, ...rest}) => {

    let {numOperacion ,setNumOperacion, resultado, setResultado} = useContext(CalculatorContext)
    let {tema, Boton} = useContext(ThemeContext)

    const onClick = (e) => {

        switchBotones(numOperacion, setNumOperacion, resultado, setResultado, name, value)
        
    }

    return (
        <Boton onClick={onClick} tema={tema} {...rest}>{value}</Boton>
    )
}

export default BotonC
