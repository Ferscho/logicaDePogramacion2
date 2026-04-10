
function pedirTemperatura() {
      let tempCelsius;
      while (true) {
        let entrada = prompt("Ingrese la temperatura en grados Celsius:");
        
        // Validar si es número
        tempCelsius = parseFloat(entrada);
        if (!isNaN(tempCelsius)) {
          break; // salir del loop si es válido
        } else {
          alert("Error: Debe ingresar un número válido.");
        }
      }

      // Conversión
      let tempFahrenheit = (tempCelsius * 9/5) + 32;
      let tempKelvin = tempCelsius + 273.15;

      // Mostrar resultados en consola
      console.log("Grados Kelvin: " + tempKelvin.toFixed(2));
      console.log("Grados Fahrenheit: " + tempFahrenheit.toFixed(1));

      // Mostrar resultados en el DOM
      document.getElementById("resultado").innerHTML = `
        <p>Grados Kelvin: ${tempKelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${tempFahrenheit.toFixed(1)}</p>
      `;
    }
