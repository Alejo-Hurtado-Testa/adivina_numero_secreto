const readlineSync = require('readline-sync');
const {
  generarNumeroAleatorio,
  verificarNumeroSecreto,
} = require('./adivinanza');

const obtenerNumeroDeUsuario = () => {
  return readlineSync.question('Ingresa un numero para adivinar: '); // LE PONEMOS EL  .QUESTION PARA QUE EL USUARIO PUEDA INGRESAR EL NUMERO MEDIANTE EL  INPUT, SI NO HACEMOS ESTO, SALTA ERROR
};

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  let numeroAdivinado = 0;
  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroDeUsuario();
    verificarNumeroSecreto(numeroSecreto, numeroAdivinado);
  }
};

juegoAdivinanza();
