
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
        liberaFecharPedido();
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
        liberaFecharPedido();
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
        liberaFecharPedido();
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

function liberaFecharPedido(){
    let caixa_baixo = document.querySelector(".caixa-texto-baixo");
    caixa_baixo.classList.add("caixa-texto-baixo-verde");
    let texto = caixa_baixo.querySelector(".fonte-texto-baixo");
    texto.innerHTML = "Fechar pedido";
}

function precoToNumber(str){
    let num="";
    for (let i = 0; i < str.length; i++){
        switch(str[i]){
            case ",":
                num = num + ".";
                break;
            case "0":
                num = num + "0";
                break;
            case "1":
                num = num + "1";
                break;
            case "2":
                num = num + "2";
                break;               
            case "3":
                num = num + "3";
                break;
            case "4":
                num = num + "4";
                break;
            case "5":
                num = num + "5";
                break;
            case "6":
                num = num + "6";
                break;
            case "7":
                num = num + "7";
                break;
            case "8":
                num = num + "8";
                break;
            case "9":
                num = num + "9";
                break;
            default:
                num = num;
        }
    }
    let numero = Number(num);
    return numero;
}

function fecharPedido(){
    if (tresSelecionados()){
        let pf = document.querySelector(".caixa-borda-verde-pf");
        let nomePf = pf.querySelector(".titulo-comida").innerHTML;
        let precoPf = pf.querySelector(".fonte-preco").innerHTML;
        let bebida = document.querySelector(".caixa-borda-verde-bebida");
        let nomeBebida = bebida.querySelector(".titulo-comida").innerHTML;
        let precoBebida = bebida.querySelector(".fonte-preco").innerHTML;
        let sobremesa = document.querySelector(".caixa-borda-verde-sobremesa");
        let nomeSobremesa = sobremesa.querySelector(".titulo-comida").innerHTML;
        let precoSobremesa = sobremesa.querySelector(".fonte-preco").innerHTML;
        let precoTotal = precoToNumber(precoPf) + precoToNumber(precoBebida) + precoToNumber(precoSobremesa);
        precoTotal = precoTotal.toFixed(2);
        let precoFinal = precoTotal.toString();
        precoFinal = precoFinal.replace(".",",");

        let textoFecharPedido = 
`Olá, gostaria de fazer o pedido:
    - Prato: ${nomePf}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${precoFinal}`;
        
        const phoneNum = "5579981096799";

        let textoFecharPedidoEncoded = encodeURIComponent(textoFecharPedido);
        const linkWhatsapp = `https://wa.me/${phoneNum}?text=${textoFecharPedidoEncoded}`;
        window.open(linkWhatsapp);

    }
}