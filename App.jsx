import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade grau I';
    else if (imc < 39.9) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    return { imc: imc.toFixed(2), classificacao };
  };

  const handleChange = () => {
    // Converte altura se estiver em cm (ex: 180 => 1.80)
    const alturaMetros = parseFloat(altura) > 3 ? parseFloat(altura) / 100 : parseFloat(altura);
    
    // Converte peso se parecer estar em gramas (ex: 2000 => 200.0)
    const pesoKg = parseFloat(peso) > 500 ? parseFloat(peso) / 10 : parseFloat(peso);

    if (peso && altura) {
      const resultado = calcularIMC(pesoKg, alturaMetros);
      setResultado(resultado);
    } else {
      setResultado(null);
    }
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <input
        type="number"
        placeholder="Altura (ex: 180 cm ou 1.80 m)"
        value={altura}
        onChange={(e) => { setAltura(e.target.value); handleChange(); }}
      />
      <input
        type="number"
        placeholder="Peso (ex: 200 kg ou 2000)"
        value={peso}
        onChange={(e) => { setPeso(e.target.value); handleChange(); }}
      />
      {resultado && (
        <div className="resultado">
          <p><strong>IMC:</strong> {resultado.imc}</p>
          <p><strong>Classificação:</strong> {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
