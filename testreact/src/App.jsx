import { useState } from 'react'
import './index.css'

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')

  const alturaM = parseFloat(altura) / 100
  const imc = peso && altura ? (parseFloat(peso) / (alturaM * alturaM)).toFixed(2) : null

  const classificarIMC = (valor) => {
    const imc = parseFloat(valor)
    if (imc < 18.5) return 'Abaixo do peso'
    if (imc < 24.9) return 'Peso normal'
    if (imc < 29.9) return 'Sobrepeso'
    if (imc < 34.9) return 'Obesidade grau 1'
    if (imc < 39.9) return 'Obesidade grau 2'
    return 'Obesidade grau 3'
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />

      {imc && (
        <div>
          <p><strong>IMC:</strong> {imc}</p>
          <p><strong>Classificação:</strong> {classificarIMC(imc)}</p>
        </div>
      )}
    </div>
  )
}

export default App
