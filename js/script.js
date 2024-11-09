/* Alteração no título de acordo com as informações fornecidas pelo usuário

const tituloPrincipal = document.getElementById('tituloPrincipal');

var nome = prompt ('digite seu nome:: ');

tituloPrincipal.textContent = ` seja bem-vindo(a) ${nome} `;

*/


/* O Query selector é usado com as informações do CSS, ou seja, utilizando # para classes
e . para IDs

const tituloPrincipal = document.querySelector('#tituloPrincipal');

tituloPrincipal.textContent = 'teste';

*/

//const tituloPrincipal = document.querySelector('#tituloPrincipal');
//const divDOM = document.querySelectorAll('div.content');

//manipulação de DOM no html

//tituloPrincipal.innerHTML = 'teste <a href=""> olá <a> ';

//manipulação CSSOM no CSS
//divDOM[0].style.backgroundColor = 'black';

//tituloPrincipal.textContent = 'teste <a href=""> olá <a>';
//tituloPrincipal.textContent = 'teste';
//tituloPrincipal.innerText= 'test'


/*
for (let i of tituloPrincipal){
    
    tituloPrincipal[i].textcontent = 'teste'
}

*/
//tituloPrincipal.textContent = 'teste'; 


/* FUNÇÕES DA TABOADA - PARA CASA FAZER O SOMA *****************************
function tabuada () {
    const valor = document.querySelector('#tabuada').value;
    const divResposta = document.querySelector('#respostaTabuada');


    divResposta.innerHTML = '';

    if(valor !='' ){

        for (let i=1; i<=10; i++){

            divResposta.innerHTML += ` ${valor} X ${i} = ${valor*i}<br>` ;

        }
    } else{
        divResposta.textContent = 'Insira um valor, Zé';
    }
}
*/

function alterarCor (){

    //entrada
    const cor = document.querySelector('#cor').value; //informações de valores que são devolvidas para o usuário.
    const body = document.querySelector('body');

    //saida
    body.style.backgroundColor = `${cor}`;

    
}


/*
botao.alertar.addEventListener('click', ()=>alert('Estou funfando'))


botao.soma.addEventListener('click', ()=>alert('Estou funfando também'))
*/

const botao = {
    alertar: document.querySelector('#botaoAlerta'),
    soma: document.querySelector('#soma'),
    alterarCor: document.querySelector('#alterarCor'),
    umClick: document.querySelector('#umClick'),
    doisClick: document.querySelector('#doisClick'),

}

const estrutura = {
    body: document.querySelector('body'),
    divArea: document.querySelector('#area'),
   
}

const img = {
    gatoSome: document.querySelector('#gato'),
    gatoAparece: document.querySelector('#gato')
}

const audio = {
    gatoMia: new Audio("./media/audio/miAu.mp3")
}

var form = {
    inputCor: document.querySelector('#cor')
}

botao.umClick.addEventListener('click', ()=> img.gatoSome.classList.toggle('fechado'));

// botao.doisClick.addEventListener('dblclick', ()=>img.gatoSome.style.display = 'block')


// Eventos

// function alterarCor(){

//     estrutura.body.style.backgroundColor = form.inputCor.value

// }

// botao.alterarCor.addEventListener('click', alterarCor)

// botao.alterarCor.addEventListener('click', ()=> estrutura.body.style.backgroundColor = form.inputCor)
