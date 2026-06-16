let contador = 0
let peso
while(contador < 10){
peso = Number(prompt("Digite o peso"))
if(peso>1.1 || peso <0.9){
    alert("Fora tolerancia do peso")
}
contador ++
}
