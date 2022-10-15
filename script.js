function selecionarPratoPf(prato){

    let sel_anterior = document.querySelector(".caixa-borda-verde-pf");
    if (sel_anterior !== null){
        sel_anterior.classList.remove("caixa-borda-verde-pf");
        let img_sel_anterior = sel_anterior.querySelector(".selecionado-img");
        img_sel_anterior.classList.remove("ativa-selecionado-img");
    }

    prato.classList.add("caixa-borda-verde-pf");
    let img_selecionado = prato.querySelector(".selecionado-img");
    img_selecionado.classList.add("ativa-selecionado-img");

    if(tresSelecionados()){
        fecharPedido();
    }
}

function selecionarPratoBebida(prato){

    let sel_anterior = document.querySelector(".caixa-borda-verde-bebida");
    if (sel_anterior !== null){
        sel_anterior.classList.remove("caixa-borda-verde-bebida");
        let img_sel_anterior = sel_anterior.querySelector(".selecionado-img");
        img_sel_anterior.classList.remove("ativa-selecionado-img");
    }

    prato.classList.add("caixa-borda-verde-bebida");
    let img_selecionado = prato.querySelector(".selecionado-img");
    img_selecionado.classList.add("ativa-selecionado-img");

    if(tresSelecionados()){
        fecharPedido();
    }
}

function selecionarPratoSobremesa(prato){

    let sel_anterior = document.querySelector(".caixa-borda-verde-sobremesa");
    if (sel_anterior !== null){
        sel_anterior.classList.remove("caixa-borda-verde-sobremesa");
        let img_sel_anterior = sel_anterior.querySelector(".selecionado-img");
        img_sel_anterior.classList.remove("ativa-selecionado-img");
    }

    prato.classList.add("caixa-borda-verde-sobremesa");
    let img_selecionado = prato.querySelector(".selecionado-img");
    img_selecionado.classList.add("ativa-selecionado-img");

    if(tresSelecionados()){
        fecharPedido();
    }
}

function tresSelecionados(){
    let pf = document.querySelector(".caixa-borda-verde-pf");
    let bebida = document.querySelector(".caixa-borda-verde-bebida");
    let sobremesa = document.querySelector(".caixa-borda-verde-sobremesa");
    if ((pf !== null) && (bebida !== null) && (sobremesa !== null)){
        return true;
    } else {
        return false;
    }
}

function fecharPedido(){
    let caixa_baixo = document.querySelector(".caixa-texto-baixo");
    caixa_baixo.classList.add("caixa-texto-baixo-verde");
    let texto = caixa_baixo.querySelector(".fonte-texto-baixo");
    texto.innerHTML = "Fechar pedido";
}
