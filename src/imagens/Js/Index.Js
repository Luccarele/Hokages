const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("click", () => {
    if (window.innerHeight < 450) {
      window.screenTo({ top: 0, behavior: "smooth" });
    }
    removerSelecaodePersonagem();
    personagem.classList.add("selecionado");

    newFunction(personagem);

    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");

    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
  });
});
function newFunction(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");

  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/grande/${idPersonagem}-grande.png`;
}

function removerSelecaodePersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
