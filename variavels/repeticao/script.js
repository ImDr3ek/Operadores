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
function exer9(){
       let contador = 0
    while(contador < 100){
        contador++
        
    if(contador%5 == 0 && contador%3 == 0){
            alert("fizzbuzz " + contador)
        }
    else if(contador%3 == 0){
        alert("fizz " + contador)
    }
    else if(contador%5 == 0){
        alert("buzz " + contador)
    }

    else{
        alert(contador)
    }
    }
}
function exer10(){
    let i = 0
    let total = 0
    while(i < 10){
        i++
        total = total + (1/i)
        alert(total)
    }

}
function exer11(){
     let contador = 0
    let par = 0
    let impar = 0 
    let valor = 0
    valor = Number(prompt("Quanto?"))
    while(contador < valor){
        contador++
        
    if(contador%2 == 0){
        par++
        alert("tem par: " + par + " em contador: " + contador)
    }
    else{
        impar++
        alert(" tem impar: " + impar + " em contador: " + contador)
    }
}
}
function exer12(){
let lista = 0
let valormaior
let valormenor
lista = Number(prompt("Da um numero com mais de 2 cifras"))
while(lista <= lista){
    valormaior = lista - 1
    valormenor = (lista - lista) + 1
    alert("valor menor: " + valormenor)
    alert("valor menor: " + valormaior)
}

}
function exer13(){
let lista = 0
let lista2 = 0
let resultado
lista = Number(prompt('lista 1'))
lista2 = Number(prompt('lista 2'))
while(lista <= lista){
    resultado = (lista + lista2) / 2
    alert("a media entre a lista 1 e a 2 é de: " + resultado)
}
}
function exer14(){

}
function exer15(){

}