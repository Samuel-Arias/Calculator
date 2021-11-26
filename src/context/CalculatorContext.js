import { createContext, useState } from "react"

const CalculatorContext = createContext()

export const CalculatorProvider = ({children}) => {

    const [numOperacion, setNumOperacion] = useState('')
    const [resultado, setResultado] = useState('')

    const values = {
        numOperacion,
        setNumOperacion,
        resultado,
        setResultado
    }

    return (
        <CalculatorContext.Provider value={values}>
            {children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorContext