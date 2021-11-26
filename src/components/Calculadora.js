import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../context/ThemeContext'
import Botones from './Botones'
import Pantalla from './Pantalla'

const Calculadora = () => {

    const { tema, Calcu } = useContext(ThemeContext)

    return (

        <Calcu tema={tema}>
            <Pantalla/>
            <Botones/>
        </Calcu>

    )

}

export default Calculadora
