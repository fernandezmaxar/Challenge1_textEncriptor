// app.js

let encriptado;
let desencriptado;

(function () {
  let encriptarBtn = document.getElementById('encriptarBtn');
  encriptarBtn.addEventListener('click', () => {
    limpiar();
    encriptar();
  });

  let desencriptarBtn = document.getElementById('desencriptarBtn');
  desencriptarBtn.addEventListener('click', () => {
    limpiar();
    desencriptar();
  });
})();

// Función para cifrar el texto
function encriptar(texto_entrada) {
  // Obtener el texto ingresado por el usuario.
  texto_entrada = document.querySelector('.espacio_entrada').value;

  // Verifica si el usuario ingresó un texto.
  if (texto_entrada.length === 0) {
    alert('Por favor ingrese texto');
    let img_principal = document.getElementById('img_principal');
    img_principal.style.visibility = 'visible';

    let copiarBtn = document.querySelector('.copiar');
    copiarBtn.style.visibility = 'hidden';
  } else {
    // Transformar el texto a minúsculas.
    let texto_encriptar = texto_entrada.toLowerCase();

    // Encriptar el texto.
    encriptado = texto_encriptar.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

    // Espacio de entrada limpio
    // document.querySelector('.espacio_entrada').value = '';

    // Llame a la función showOutput.
    mostrar();

    return encriptado;
  }
}

// Función para descifrar un texto encriptado
function desencriptar(texto_entrada) {
  // Obtener el texto ingresado por el usuario
  texto_entrada = document.querySelector('.espacio_entrada').value;

  // Verifica si el usuario ingresó un texto.
  if (texto_entrada.length === 0) {
    alert('Por favor ingrese texto');
    let img_principal = document.getElementById('img_principal');
    img_principal.style.visibility = 'visible';

    let copiarBtn = document.querySelector('.copiar');
    copiarBtn.style.visibility = 'hidden';
  } else {
    // Transformar el texto a minúsculas
    let texto_desencriptar = texto_entrada.toLowerCase();

    // Descifrar el texto
    desencriptado = texto_desencriptar.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

    // Espacio de entrada limpio
    // document.querySelector('.espacio_entrada').value = '';

    // Llame a la función showOutput
    mostrar();

    return desencriptado;
  }
}

// Función para mostrar el resultado del cifrado.

function mostrar() {
  // Limpiar la imagen y su título.

  let img_principal = document.getElementById('img_principal');
  img_principal.style.display = 'none';

  // Crea un área de texto donde mostraremos el texto encriptado

  let salida = document.getElementById('salida');
  salida.insertAdjacentHTML('afterbegin', '<textarea autofocus class="salida"></textarea>');

  // Vuelva a hacer visible el botón de copiar (estaba oculto al cargar la página)

  let copiarBtn = document.querySelector('.copiar');
  copiarBtn.style.visibility = 'visible';

  // Seleccionar elemento para mostrar el texto encriptado en el área de texto

  let texto_salida = document.querySelector('.salida');

  // Verifique si el usuario apunta al botón de encriptar o desencriptar y envíe la respuesta correcta

  document.addEventListener('click', (e) => {
    let targetBtn = e.target;

    if (targetBtn.classList.contains('encriptar')) {
      texto_salida.value = encriptado;
    } else if (targetBtn.classList.contains('desencriptar')) {
      texto_salida.value = desencriptado;
    }
  });
}

// Función para limpiar el área de salida en caso de que ya haya algún texto encriptado

function limpiar() {
  if (encriptado || desencriptado) {
    let salida = document.querySelector('.salida');
    salida.style.display = 'none';
  }
}

// Función para copiar el resultado del cifrado/descifrado

copiar();
function copiar() {
  // Buscar botón de destino
  let copiarBtn = document.querySelector('.copiar');

  // Escuche el evento de clic y copie el texto
  copiarBtn.addEventListener('click', () => {
    let copiar_texto = document.querySelector('.salida').value;
    navigator.clipboard.writeText(copiar_texto);
    
    alert("Copiado");

    // Espacio de entrada limpio
    document.querySelector('.espacio_entrada').value = '';
  });
}