function rodarWhile(){
    let i = 0
    
    while(i < 50){
        i++
        console.log(i)

    }
}
function rodarDoWhile(){
    let i = 1000
    do{

    }while(i < 50)
}
function exemploDoWhile(){
    do{
idade = Number(prompt("digite sua idade"))
if(idade<18) alert('idade inaceitavel')
    }while(idade < 18)
        alert("voce entrou no sistema")
}
function exemploDoWhileLimitado(){
    let idade = 0
    let tentativas = 3
    do{
        idade = Number(prompt('digite sua idade'))
        tentativas --
    }while(idade < 18 && tentativas>0){
        alert('voce entrou no sistema')
    }
}


function rodarFor(){

    for(let i = 0;i < 50; i++){

        console.log(i);
    }

}


function exe1(){
    let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
    console.log(dias);
    
}
function exe2(){

    let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
    dias.pop()
    let diasIn = []
    diasIn.push(dias.pop)
    console.log(dias)
    console.log(diasIn)

}
function exe3(){
    let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
    dias.push(prompt('adiciona feriado'))
    console.log(dias)

}
function exe4(){
let pares = []
for(i = 0; i < 20; i +=2){
    pares.push(i)
    console.log(pares);
    console.log(i);
    
}
}
function exe5(){
let sustituto = [2, 4, 12, 8, 10, 12, 14, 16, 18, 20]
console.log(sustituto);

}
function exe6(){
    let frutas = ['banana', 'maçã', 'uva']
    frutas.push(prompt("adiciona morango"))
    console.log(frutas);
    

}
function exe7(){

}
function exe8(){

}
function exe9(){

}
function exe10(){

}
function exe11(){

}
function exe12(){

}
function exe13(){

}
function exe14(){

}
function exe15(){

}
function exe16(){

}
function exe17(){

}
function exe18(){

}
function exe19(){

}
function exe20(){

}