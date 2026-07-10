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
// function