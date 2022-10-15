function selecionarPrato(prato){
    prato.classList.toggle("caixa-borda-verde");
    let img_selecionado = prato.querySelector(".selecionado-img");
    img_selecionado.classList.toggle("ativa-selecionado-img");
}