const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificarNumeroSecreto = (numeroSecreto, numeroAdivinado) => {
  if (numeroSecreto > numeroAdivinado) {
    console.log('El numero secreto es mayor!');
  } else if (numeroSecreto < numeroAdivinado) {
    console.log('El numero secreto es menor!');
  } else if (numeroSecreto === numeroAdivinado) {
    console.log('Felicitaciones adivinaste el numero!');
  }
};

module.exports = { generarNumeroAleatorio, verificarNumeroSecreto };
