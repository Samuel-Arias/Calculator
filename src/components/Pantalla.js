import React from 'react'
import styled from 'styled-components'

import Operaciones from './Operaciones'
import Resultados from './Resultados'

const ContenedorPantalla = styled.div`
    width: 100%;
    height: 100px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: inset 0 0 5px 2px #0003;
    padding: 0 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Pantalla = () => {
    return (
        <ContenedorPantalla>
            <Operaciones/>
            <Resultados/>
        </ContenedorPantalla>
    )
}

export default Pantalla
