const textoOriginal = document.getElementById('texto-original');
const desplazamientoInput = document.getElementById('desplazamiento');
const textoCifrado = document.getElementById('texto-cifrado');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');

function cifrarCesar(texto, desplazamiento) {
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let textoCifrado = '';
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i];
    const indice = alfabeto.indexOf(caracter);
    if (indice !== -1) {
      const nuevoIndice = (indice + desplazamiento) % alfabeto.length;
      textoCifrado += alfabeto[nuevoIndice];
    } else {
      textoCifrado += caracter; // Si no es una letra, lo agregamos sin cambios
    }
  }
  return textoCifrado;
}

function desencriptarCesar(texto, desplazamiento) {
  // El descifrado es similar al cifrado, pero restando el desplazamiento
  return cifrarCesar(texto, -desplazamiento);
}

btnEncriptar.addEventListener('click', () => {
  const texto = textoOriginal.value;
  const desplazamiento = parseInt(desplazamientoInput.value);
  const resultado = cifrarCesar(texto, desplazamiento);
  textoCifrado.value = resultado;
});

btnDesencriptar.addEventListener('click', () => {
  const texto = textoCifrado.value;
  const desplazamiento = parseInt(desplazamientoInput.value);
  const resultado = desencriptarCesar(texto, desplazamiento);
  textoOriginal.value = resultado;
});