function exer1(){   
    let soma = 0;
    for(let i = 1; i<=10; i++){
        soma += i;
        console.log(soma)
        console.log("a soma total é: " + soma);
    }
}
function exer2(){
    let tabuada =5, soma = 0
    for(let i= 1; i<=10; i++){
        soma = tabuada * i
        console.log(soma)
    }
}
function exer3(){
let soma = 0
for(let i = 1; i<=10; i++){
    soma = i * i
    console.log(soma)
}
}
function exer4(){
let jps = ["j","a","v","a","S","c","r","i","p","t"]
for(let i = 0; i<10; i++)
 
    console.log(jps[i]);
}
function exer5(){
let multiplo = 3
let soma = 0
for(let i = 1; i<=30; i++){
    soma = multiplo * i
    console.log(soma)
}
}
function exer6(){
let as = "*"
for(let i = 1; i<=10; i++)
    console.log(as)
}
function exer7(){
let soma=0

for(let i = 0; i<=20; i+=2){
    soma = soma + i
    console.log(soma)
}
}
function exer8(){
for(i = 5; i <=50; i+=5){
   
    console.log(i) 
}
}
function exer9(){
for(i=0;i<=8;i++){
    console.log("ola")
}
}
function exer10(){
let soma=0

for(let i = 1; i<=15; i+=2){
    soma = soma + i
    console.log(soma)
}
}
function exer11(){
console.log("ficou de xerec")
}
function exer12(){
let x =["1", "12", "123", "1234", "12345"]
for(i = 0; i<5; i++)
    console.log(x[i])
}
function exer13(){
 let resposta = 1
    for(i = 1; i<=5; i++){
        resposta *= i
        console.log(resposta)
}
}
function exer14(){
 let o = "otorrinolaringologista", contador = 0
    for(i = 0; i<o.length; i++){
        if(o[i] == "o"){
            contador++
            console.log(contador)
        }
    }
}