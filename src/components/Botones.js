import styled from 'styled-components'

import BotonC from './BotonC'

const ContenedorBotones = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: repeat(5, 60px);
    grid-gap: 5px;
    margin-top: 10px;
`

const Botones = () => {

    return (
        <ContenedorBotones>
            <BotonC col='2' value='C' />
            <BotonC value='DEL' />
            <BotonC name='/' value='/' />
            <BotonC name='7' value='7' />
            <BotonC name='8' value='8' />
            <BotonC name='9' value='9' />
            <BotonC name='*' value='x' />
            <BotonC name='4' value='4' />
            <BotonC name='5' value='5' />
            <BotonC name='6' value='6' />
            <BotonC name='-' value='-' />
            <BotonC name='1' value='1' />
            <BotonC name='2' value='2' />
            <BotonC name='3' value='3' />
            <BotonC name='+' value='+' />
            <BotonC name='0' value='0' />
            <BotonC name='.' value='.' />
            <BotonC col='2' value='=' />
        </ContenedorBotones>
        
    )
}

export default Botones
