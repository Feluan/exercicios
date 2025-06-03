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

while (true) {
  let acao = prompt(
    "Digite '+' para incrementar, ' - ' para decrementar ou 'sair' para encerrar."
  );

  if (acao === "+") {
    incrementar();
  } else if (acao === "-") {
    decrementar();
  } else if (acao?.toLocaleLowerCase() === "sair") {
    break;
  } else {
    alert("Opção inválida!");
  }
}
sa