import { ToggleTema } from '../style/vars'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const BotonTema = () => {

    const {tema, setTema} = useContext(ThemeContext)
    const onClick = () => {
        (tema === 'light')
            ? setTema('dark')
            : setTema('light')
    }

    return (
        <ToggleTema onClick={onClick}>
            {
                (tema === 'light')
                    ? <img src={moon} alt="Luna tema" />
                    : <img src={sun} alt="Sol tema" />
            }
        </ToggleTema>
    )

}

export default BotonTema