const flecha = document.querySelectorAll(".desplazar");
const respuestas = document.querySelectorAll(".rest");
console.log(respuestas);
function cambiarEstado(e) {
  switch (e.target.id) {
    case "pregunta1":
      flecha.forEach((item) => {
        const titulo = item.previousElementSibling;
        if (item.id !== "pregunta1") {
          item.classList.remove("girar");
          titulo.classList.remove("seleccionar");
        } else {
          item.classList.add("girar");
          titulo.classList.add("seleccionar");
          mostrarRespuesta(1);
        }
      });
      break;
    case "pregunta2":
      flecha.forEach((item) => {
        const titulo = item.previousElementSibling;
        if (item.id !== "pregunta2") {
          item.classList.remove("girar");
          titulo.classList.remove("seleccionar");
        } else {
          item.classList.add("girar");
          titulo.classList.add("seleccionar");
          mostrarRespuesta(2);
        }
      });
      break;
    case "pregunta3":
      flecha.forEach((item) => {
        const titulo = item.previousElementSibling;
        if (item.id !== "pregunta3") {
          item.classList.remove("girar");
          titulo.classList.remove("seleccionar");
        } else {
          item.classList.add("girar");
          titulo.classList.add("seleccionar");
          mostrarRespuesta(3);
        }
      });
      break;
    case "pregunta4":
      flecha.forEach((item) => {
        const titulo = item.previousElementSibling;
        if (item.id !== "pregunta4") {
          item.classList.remove("girar");
          titulo.classList.remove("seleccionar");
        } else {
          item.classList.add("girar");
          titulo.classList.add("seleccionar");
          mostrarRespuesta(4);
        }
      });
      break;
    case "pregunta5":
      flecha.forEach((item) => {
        const titulo = item.previousElementSibling;
        if (item.id !== "pregunta5") {
          item.classList.remove("girar");
          titulo.classList.remove("seleccionar");
        } else {
          item.classList.add("girar");
          titulo.classList.add("seleccionar");
          mostrarRespuesta(5);
        }
      });
      break;
  }
}

function mostrarRespuesta(number) {
  switch (number) {
    case 1:
      respuestas.forEach((item) => {
        if (item.id !== "respuesta1") {
          item.classList.remove("visualizar");
        } else {
          item.classList.add("visualizar");
        }
      });
      break;
    case 2:
      respuestas.forEach((item) => {
        if (item.id !== "respuesta2") {
          item.classList.remove("visualizar");
        } else {
          item.classList.add("visualizar");
        }
      });
      break;
    case 3:
      respuestas.forEach((item) => {
        if (item.id !== "respuesta3") {
          item.classList.remove("visualizar");
        } else {
          item.classList.add("visualizar");
        }
      });
      break;
    case 4:
      respuestas.forEach((item) => {
        if (item.id !== "respuesta4") {
          item.classList.remove("visualizar");
        } else {
          item.classList.add("visualizar");
        }
      });
      break;
    case 5:
      respuestas.forEach((item) => {
        if (item.id !== "respuesta5") {
          item.classList.remove("visualizar");
        } else {
          item.classList.add("visualizar");
        }
      });
      break;
  }
}

flecha.forEach((item) => {
  item.addEventListener("click", cambiarEstado);
});
