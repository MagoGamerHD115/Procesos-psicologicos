const iniciarBtn = document.getElementById("iniciarBtn");
const temporizador = document.getElementById("temporizador");
const imagenBox = document.getElementById("imagenBox");
const preguntasBox = document.getElementById("preguntasBox");

iniciarBtn.addEventListener("click", iniciarActividad);

function iniciarActividad() {
  let tiempo = 30;

  iniciarBtn.disabled = true;
  iniciarBtn.textContent = "Observa la imagen...";

  imagenBox.classList.remove("oculto");
  temporizador.classList.remove("oculto");
  preguntasBox.classList.add("oculto");

  temporizador.textContent = `Tiempo restante: ${tiempo} segundos`;

  const intervalo = setInterval(() => {
    tiempo--;
    temporizador.textContent = `Tiempo restante: ${tiempo} segundos`;

    if (tiempo === 0) {
      clearInterval(intervalo);

      imagenBox.classList.add("oculto");
      temporizador.classList.add("oculto");
      preguntasBox.classList.remove("oculto");

      iniciarBtn.textContent = "Actividad finalizada";
      iniciarBtn.style.display = "none";
    }
  }, 1000);
}