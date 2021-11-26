import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const DivContenedor = ({children}) => {
    
    const { tema, ContDiv, setTema } = useContext(ThemeContext)

    return (
        <ContDiv tema={tema}>
            {children}
        </ContDiv>
    )
}

export default DivContenedor
