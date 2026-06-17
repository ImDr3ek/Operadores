let i = 0
function exer(){

    
    let contador = 0
    let peso
    while(contador < 10){
        peso = Number(prompt("Digite o peso"))
        if(peso>1.1 || peso <0.9){
            alert("Fora tolerancia do peso")
        }
        contador ++
    }
    
}

function exer1(){
    let contador =  0
    while(contador < 10){
    contador ++
    alert('Quadrado de ' + contador)
    i = contador * contador
    alert("Resultado " + i)
    
    }
}
function exer2(){
    let contador = 10
    while(contador > 0){
     contador --
     alert('contador 10 -1: ' + contador)
    }
}


function exer3(){
let contador = 0
let calculo = 0
while(contador < 100){
    contador ++
    calculo = calculo + contador
    console.log(calculo)
    alert(calculo)
}
}
function exer4(){
    let tabua = 5
    let contador = 0, total
    while(contador < 10){
        
        contador ++
        total = tabua * contador
        // console.log(contador)
        console.log(tabua)
        alert(total)
    }
    
}
function exer5(){
    
    let tabua = 0
    let contador = 0
    let total 
    tabua = Number(prompt('escreva o numero que quer'))
    while(contador < 10){
        
        contador ++
        total = tabua * contador
        // console.log(contador)
        console.log(tabua)
        alert(total)
    }
}

function exer6(){
while(i<20){
    i ++
    if(i%2 != 0){
        alert(i)
    }
}
}
function exer7(){

    let contador = 0
    let contadordec
    while(contador < 11){
     contador ++
     alert('contador: ' + contador)
     if(contador == 10){
     
         contadordec = contador - 1
         alert('contador: ' + contadordec)
     }
    }
}
// function exer8(){
    
// }
// function exer9(){
    
// }
// function exer10(){
    
// }
// function exer11(){
    
// }
// function exer12(){

// }
// function exer13(){

// }
// function exer14(){

// }
// function exer15(){

// }