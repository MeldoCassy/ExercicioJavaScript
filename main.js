alert("Bem vindo ao Hopy Hari");

function Parque(){
    let altura = Number(prompt("Digite a sua altura"))
    if(altura >= 1.5)
    alert("você pode se divertir");
    else{
        alert("Que pena, não pode entrar");
    }
}

function mercadinho(){
    alert("Verifique o seu estoque")
    let estoque = Number(prompt("Digite o número do estoque do produto desejado"))
    if(estoque<5){
        alert("O estoque está baixo")
    }
    else{
        alert("Estoque está perfeito!")
    }
}

function Valores(){
    alert("Verifique os valores, por gentileza")
    let valor1 = Number(prompt("digite o valor que tem na sua conta"))
    if(valor1<756.5){
    alert("Seu valor está isento, meu amigo ou amiga")
    }
    else{
        alert("Taxa de 10%")
    }
}

function Aprovado(){
    alert("O Teste da Aprovação e Reprovação")
    let Aprovado = prompt("Diga-nos uma cor")
    let Reprovado = prompt("digite a outra cor ou a mesma")
    if(cores1=cores2){
        alert("Verdadeiro")
    }
    else(
        alert("Falso")
    )
}