let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo;

function ObtenerTiempo() {
  const horasStr = horas.toString().padStart(2, "0");
  const minutosStr = minutos.toString().padStart(2, "0");
  const segundosStr = segundos.toString().padStart(2, "0");
  return `${horasStr}:${minutosStr}:${segundosStr}`;
}

function actualizarCronometro() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if ((minutos = 60)) {
      minutos = 0;
      horas++;
    }
  }
  document.getElementById("cronometro").innerText = ObtenerTiempo();
}

function iniciarCronometro() {
  if (!intervalo) {
    // Solo iniciar si no hay otro intervalo activo
    intervalo = setInterval(actualizarCronometro, 1000); // Actualiza cada segundo
  }
}

function pausarCronometro() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetCronometro() {
  pausarCronometro();
  horas = 0;
  minutos = 0;
  segundos = 0;
  document.getElementById("cronometro").innerText = "00:00:00";
}

document.getElementById("iniciar").addEventListener("click", iniciarCronometro);
document.getElementById("pausar").addEventListener("click", pausarCronometro);
document.getElementById("reset").addEventListener("click", resetCronometro);
