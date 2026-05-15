let cont = 0
function implementarContagem(){
cont = cont + 1
document.getElementById('p-contagem').innerHTML = cont

}

function diminuirContagem(){
cont = cont - 1
document.getElementById('p-contagem').innerHTML = cont

}

function resetContagem(){
window.location.reload()

// cont = 0
// document.getElementById('p-contagem').innerHTML = cont

}






let global = 'eu sou uma variavel global :>'

function funcao1(){
    let local = 'Sou uma variavel local :D'

 console.log(local);
 console.log(global);
}
function funcao2(){
    console.log(global);
    // console.log(local);
}

// funcao1()
// funcao2()