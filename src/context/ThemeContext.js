import { createContext, useState } from "react";
import {Boton, Input, Calcu, ContDiv} from '../style/vars'

const ThemeContext = createContext()

export const TemaProvider = ({children}) => {

    const [tema, setTema] = useState('light')
    const values = {
        Boton,
        Input,
        Calcu,
        ContDiv,
        tema,
        setTema
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext