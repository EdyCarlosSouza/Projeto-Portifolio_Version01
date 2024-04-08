/* 
    _Objetivo 1 quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        #Passo 1 pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele T

        #Passo 2 identificar o clique no botão

        #Passo 3 adicionar a classe (.ativo) nos projetos escondidos

    _Objetivo 2 esconder o botão de mostrar mais

        #Passo 1 pegar o botão e esconder ele
*/

// OBJETIVO 1 - #PASSO 1:

const BotaoMostraProjetos = document.querySelector('.btn-mostrar-projetos');
const ProjetosInativos = document.querySelectorAll('.projeto:not(.ativo')

console.log(ProjetosInativos);

// OBJETIVO 1 - #PASSO 2:

BotaoMostraProjetos.addEventListener('click', () => {
    // OBJETIVO 1 - #PASSO 3:
    mostrarMaisProjetos();
    // OBJETIVO 2 - #PASSO 1
    esconderBotao();
});


function esconderBotao() {
    BotaoMostraProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    ProjetosInativos.forEach(ProjetosInativo => {
        ProjetosInativo.classList.add('ativo');
    });
}
