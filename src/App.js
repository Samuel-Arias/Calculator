import Calculadora from "./components/Calculadora"
import './style/allDocument.css'
import { CalculatorProvider } from "./context/CalculatorContext"
import { TemaProvider } from "./context/ThemeContext"
import DivContenedor from "./components/DivContenedor"
import BotonTema from "./components/BotonTema"

const App = () => {

  return (

    <div className="App">

      <CalculatorProvider>

        <TemaProvider>

          <DivContenedor>

            <Calculadora />
            <BotonTema/>

          </DivContenedor>

        </TemaProvider>

      </CalculatorProvider>

    </div>

  )

}

export default App