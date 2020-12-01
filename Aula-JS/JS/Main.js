function clicou()
{
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado Por clicar");
}

function redirecionar()
{
    window.open("https://www.twitch.tv/jean_mago");
    //window.location.href = "https://www.twitch.tv/jean_mago";
}

function trocar(elemento)
{
   elemento.innerHTML = "Obrigado por passar o mouse";
    
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
}

function load()
{
    alert("Página carregada");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}

/*
function soma(n1,n2)
{
    return(n1+n2);
}

function validaIdade(idade)
{
    var validar;
    if(idade>=18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }
    return validar;
}


var idade = prompt("Qual sua idade ? ");
console.log(validaIdade(idade));


function setReplace(frase,nome,novo_nome)
{
    return frase.replace(nome,novo_nome);
}

alert(setReplace("Vai Japão","Japão","Brasil"));


alert(soma(5,10));
------------------------------------------------------
*/

/*PARTE 1 
var nome = "Pedro Torres";
var idade = 18; 
var idade2 = 12;
var frase = "Japão é o melhor time do mundo";

alert("Bem vindo " + nome + " tem " + idade + " anos" );
alert(idade + idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
*/


/* Parte 2

var frutas = [{nome : "maça", cor : "vermelha"}, {nome : "uva", cor : "roxa"}];
console.log(frutas);
alert(frutas[1].cor);


var fruta = {nome : "maça", cor : "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
-----------------------------------


var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop()
console.log(lista);
console.log(lista.join( - ));
console.log(lista.toString());
console.log(lista.reverse());
console.log(lista.length);
alert(lista[2]);
*/

/* Parte 3



var idade = prompt("Qual sua idade ?");

if(idade >= 18)
{
alert("Maior de idade");
}
else
{
alert("Menor de idade");
}
-----------------------------

var count = 0;

while(count<5)
{

    console.log(count);
    count ++;

}
-----------------------------

var count;

for(count = 0; count <=5; count++)
{

    console.log(count);
    alert(count);

}
-----------------------------


var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

*/