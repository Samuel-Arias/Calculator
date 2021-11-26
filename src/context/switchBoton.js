export const switchBotones = (numOperacion, setNumOperacion, resultado, setResultado, name, value) => {

    switch (value) {
        case 'C':
            setNumOperacion('')
            setResultado('')
            break

        case 'DEL':
            setNumOperacion(numOperacion.slice(0, -1))
            break

        case '=':
            try {
                setResultado(eval(numOperacion))

            } catch (err) {
                setResultado('Error')
            }
            break

        case 'x':
            if (resultado === '') setNumOperacion(numOperacion.concat(name))
            else {
                setResultado('')
                setNumOperacion(resultado + name)
            }
            break

        case '/':
            if (resultado === '') setNumOperacion(numOperacion.concat(name))
            else {
                setResultado('')
                setNumOperacion(resultado + name)
            }
            break

        case '-':
            if (resultado === '') setNumOperacion(numOperacion.concat(name))
            else {
                setResultado('')
                setNumOperacion(resultado + name)
            }
            break
            
        case '+':
            if (resultado === '') setNumOperacion(numOperacion.concat(name))
            else {
                setResultado('')
                setNumOperacion(resultado + name)
            }
            break

        default:
            setResultado('')
            setNumOperacion(numOperacion.concat(name))
    }

}
