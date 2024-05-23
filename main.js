function menuShow() {
    let menuMobile = document.querySelector(`.mobile-menu`);
    if(menuMobile.classList.contains(`open`)){
        menuMobile.classList.remove(`open`);
        document.querySelector(`.icon`).src = "assets/menu_white_36dp.svg";
    }else{
        menuMobile.classList.add(`open`);
        document.querySelector(`.icon`).src = "assets/close_white_36dp.svg";
    }
}

let texto = document.querySelector(`.apresentacao_conteudo_texto`).textContent;
let textoElemento = document.querySelector(`.apresentacao_conteudo_texto`);
let atraso = 50;

let contador = 0;
document.querySelector(`.apresentacao_conteudo_texto`).textContent = ``

function escreverTexto(){
    if(contador < texto.length){
        textoElemento.textContent += texto.charAt(contador);
        contador ++;
        setTimeout(escreverTexto, atraso);

    }
}

escreverTexto();
