let contador = 0;

function atualizarContador() {
  document.getElementById("contador").textContent = contador;
}

document.getElementById("incrementar").addEventListener("click", function () {
  contador++;
  atualizarContador();
});
document.getElementById("decrementar").addEventListener("click", function () {
  contador--;
  atualizarContador();
});

