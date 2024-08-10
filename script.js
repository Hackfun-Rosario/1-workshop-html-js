// Constantes y variables globales
const constantes = 0; // no se puede modificar
let variable = 0; // se puede modificar

// Componentes

// Suma y resta
const botonSuma = document.getElementById("btnSuma");
const botonResta = document.getElementById("btnResta");
const texto = document.getElementById("titulo");

// Agrega a la lista y cambia estilo
const inputTexto = document.getElementById("inputTexto");
const btnAgregar = document.getElementById("btnAgregar");
const btnCambiarEstilo = document.getElementById("btnCambiarEstilo");
const lista = document.getElementById("lista");

// Funciones

let acumulador = 0;
function contador(metodo) {
  if (metodo === "suma") {
    acumulador = acumulador + 1;
  } else if (metodo === "resta") {
    acumulador = acumulador - 1;
  }

  texto.innerHTML = acumulador;

  if (acumulador > 0) {
    texto.style = "color: green;";
  } else if (acumulador < 0) {
    texto.style = "color: blue;";
  } else {
    texto.style = "color: black;";
  }
}

// Eventos

botonSuma.onclick = () => contador("suma");
botonResta.onclick = () => {
  return contador("resta");
};
btnAgregar.onclick = () => {
  const valorInput = inputTexto.value;

  if (!valorInput) {
    return alert("Error: No esiste el testo");
  }

  const item = document.createElement("li");

  item.className = "item";

  item.innerHTML = valorInput;

  lista.append(item);

  inputTexto.value = "";
};

btnCambiarEstilo.onclick = () => {
  const items = document.getElementsByClassName("item");

  for (let index = 0; index < items.length; index++) {
    const element = items[index];

    element.style = "color:green";

    element.innerHTML = element.innerHTML + "-" + index;
  }
};
