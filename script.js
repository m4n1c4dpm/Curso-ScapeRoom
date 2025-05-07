const respuestas = {
  word1: "tensión",
  word2: "serie",
  word3: "corriente",
  word4: "paralelo"
};

function verificar() {
  let aciertos = 0;
  let total = Object.keys(respuestas).length;

  for (let id in respuestas) {
    let input = document.getElementById(id);
    let valor = input.value.trim();

    if (valor === respuestas[id]) {
      input.disabled = true;
      aciertos++;
    } else {
      input.value = "";
    }
  }

  if (aciertos === total) {
    mostrarPopup("popupSuccess");
  } else {
    mostrarPopup("popupError");
  }
}

function mostrarPopup(id) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById(id).style.display = "block";
}

function cerrarPopup() {
  document.getElementById("popupSuccess").style.display = "none";
  document.getElementById("popupError").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
