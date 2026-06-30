function desafio(){
    let dias = 0
    let soma = 0
    let sprint = 0
    dias = Number(prompt("Quantos dias"))
    for(let i = 1; i <= dias; i ++){
        sprint = Number(prompt("Quantas tarefas foram concluidas"))
        document.getElementById("rdias").innerHTML += "<br> Dia " + i + ": " + "<br>Tarefa(s) concluidas " + sprint
        soma = soma + sprint
        document.getElementById("tdias").innerHTML = "<br> Relatorio: <br> " + " Total Tarefa(s) concluidas: " + soma
    }


}

function desafio2(){
      let dias = 0, bugs =0, somaDeBugs = 0,  media = 0, maiorQuantiaBugs = 0, diaComMaisBugs = 1, menorQuantiaBugs = 0, diaComMenosBugs = 1, primeiroLoop = true, contador = 0, contador2 = 0
    dias = Number(prompt("Quantos dias vai ter o sprint?"))
    for(i = 1; i<=dias; i++){
        bugs = Number(prompt("Quantos bugs foram encontrados?"))
        if(bugs > maiorQuantiaBugs){
            maiorQuantiaBugs = bugs
            diaComMaisBugs = i
        }
        if (primeiroLoop == true){
            menorQuantiaBugs = bugs
        }
        if(bugs < menorQuantiaBugs){
            menorQuantiaBugs = bugs
            diaComMenosBugs = i 
        }   
        if(bugs > 10){
            contador++
        }
        if(bugs == 0){
            contador2++
        }
    document.getElementById("dbugs").innerHTML += "<br> Dia " + i + ": " + " <br>Bug(s) encontrado(s): " + bugs 
    somaDeBugs = somaDeBugs + bugs
    document.getElementById("tbugs").innerHTML = "<br> Relatório Final: <br>" + "Total de bugs: " + somaDeBugs
    media = somaDeBugs / dias
    document.getElementById("media").innerHTML = "<br> Média total: " + media
    document.getElementById("diaMaisBugs").innerHTML = "<br> Dia com mais bugs: " + diaComMaisBugs + "<br> Quantidade de bugs: " + maiorQuantiaBugs
    document.getElementById("diaMenosBugs").innerHTML = "<br> Dia com menos bugs: " + diaComMenosBugs + "<br> Quantidade de bugs: " + menorQuantiaBugs
    document.getElementById("maisDeDez").innerHTML = "<br> Dias com mais de 10 bugs: " + contador
    document.getElementById("diasComZero").innerHTML = "<br> Dias com 0 bugs: " + contador2
    primeiroLoop = false
    }
}