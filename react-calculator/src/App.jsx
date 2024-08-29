import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');

  // Maneja la entrada de los botones
  const handleButtonClick = (value) => {
    if (value === "AC") {
      setExpression(''); // Limpiar la pantalla
    } else if (value === "DE") {
      setExpression(expression.slice(0, -1)); // Borrar el último carácter
    } else if (value === "=") {
      try {
        setExpression(eval(expression).toString()); // Evaluar la expresión
      } catch {
        setExpression("Error"); // Mostrar error si la evaluación falla
      }
    } else {
      setExpression(expression + value); // Concatenar el valor al final de la expresión
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={expression} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => handleButtonClick('AC')} />
            <input type="button" value="DE" onClick={() => handleButtonClick('DE')} />
            <input type="button" value="." onClick={() => handleButtonClick('.')} />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleButtonClick('7')} />
            <input type="button" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" value="9" onClick={() => handleButtonClick('9')} />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleButtonClick('4')} />
            <input type="button" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" value="6" onClick={() => handleButtonClick('6')} />
            <input type="button" value="+" onClick={() => handleButtonClick('+')} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => handleButtonClick('1')} />
            <input type="button" value="2" onClick={() => handleButtonClick('2')} />
            <input type="button" value="3" onClick={() => handleButtonClick('3')} />
            <input type="button" value="-" onClick={() => handleButtonClick('-')} />
          </div>
          <div>
            <input type="button" value="00" onClick={() => handleButtonClick('00')} />
            <input type="button" value="0" onClick={() => handleButtonClick('0')} />
            <input type="button" value="=" onClick={() => handleButtonClick('=')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
