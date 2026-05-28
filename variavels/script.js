function reinicio(){
    window.location.reload()
}
const telas = document.querySelectorAll(".tela")
let paginaAtual = 0
function mostrarTela(index){
telas.forEach(function(tela){
    tela.classList.remove('ativa')
});
telas[index].classList.add('ativa')


}

function telaProxima(){

    paginaAtual++;

    if(paginaAtual >= telas.length){
        paginaAtual = 0;
    }

    mostrarTela(paginaAtual);
}

function telaAnterior(){

    paginaAtual--;

    if(paginaAtual < 0){
        paginaAtual = telas.length - 1;
    }

    mostrarTela(paginaAtual);
}

mostrarTela(0);

 

let total = 0


function registrarVenda(){
    let valor = Number(document.getElementById('contabilizador').value)
    console.log(valor)
    total = total + valor
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$' + total.toFixed(2)
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) +
    '<br>'
    document.getElementById('contabilizador').value = ''
    document.getElementById('contabilizador').focus()
    
}

let cont = 0
function implementarContagem(){
    cont ++
    document.getElementById('p-contagem').innerHTML = cont
    
}

function diminuirContagem(){
    cont --
    document.getElementById('p-contagem').innerHTML = cont
    
}

function resetContagem(){
    window.location.reload()
    
    // cont = 0
    // document.getElementById('p-contagem').innerHTML = cont
    
}

function contabilizador(){
    let valor = Number(document.getElementById('contabilizador').value)
    console.log(valor)
    
}


function tratarTecla(e){
    // console.log(e)
    if(e.key == "Enter"){
        registrarVenda()
    }
}
document.getElementById('contabilizador').addEventListener("keyup", tratarTecla)




// let global = 'eu sou uma variavel global :>'

// function funcao1(){
    //     let local = 'Sou uma variavel local :D'
    
    //  console.log(local);
    //  console.log(global);
    // }
    // function funcao2(){
        //     console.log(global);
        // console.log(local);
        // }
        
        // funcao1()
        // funcao2()
        
        
        
        let numeroAleatorio, numeroDoDado, resultadoGlobal = 0
        numeroDoDado = document.getElementById('numeroDoDado')
        function rodarDadod4(){
            numeroAleatorio = Number(Math.ceil(Math.random() * 4))
            numeroDoDado.innerHTML = numeroAleatorio
            document.getElementById('listaDeDados').innerHTML += 'D4-' + numeroAleatorio.toFixed(2) +
            '<br>'
            console.log(numeroDoDado)
            resultadoGlobal = resultadoGlobal + numeroAleatorio
            document.getElementById('totalNumero').innerHTML = 'Numero total: ' + resultadoGlobal.toFixed()
            
            
        }
        function rodarDadod6(){
            numeroAleatorio = Number(Math.ceil(Math.random() * 6))
            numeroDoDado.innerHTML = numeroAleatorio
            document.getElementById('listaDeDados').innerHTML += 'D6-' + numeroAleatorio.toFixed(2) +
            '<br>'
            console.log(numeroDoDado)
            resultadoGlobal = resultadoGlobal + numeroAleatorio
            document.getElementById('totalNumero').innerHTML = 'Numero total: ' + resultadoGlobal.toFixed()
            
            
        }
        function rodarDadod10(){
            numeroAleatorio = Number(Math.ceil(Math.random() * 10))
            numeroDoDado.innerHTML = numeroAleatorio
            document.getElementById('listaDeDados').innerHTML += 'D10-' + numeroAleatorio.toFixed(2) +
            '<br>'
            console.log(numeroDoDado)
            resultadoGlobal = resultadoGlobal + numeroAleatorio
            document.getElementById('totalNumero').innerHTML = 'Numero total: ' + resultadoGlobal.toFixed()
            
        }
        function rodarDadod12(){
            numeroAleatorio = Number(Math.ceil(Math.random() * 12))
            numeroDoDado.innerHTML = numeroAleatorio
            document.getElementById('listaDeDados').innerHTML += 'D12-' + numeroAleatorio.toFixed(2) +
            '<br>'
            console.log(numeroDoDado)
            resultadoGlobal = resultadoGlobal + numeroAleatorio
            document.getElementById('totalNumero').innerHTML = 'Numero total: ' + resultadoGlobal.toFixed()
        }
        
        let numeroSorteio, valorAposta
        
        function apostar(){
            
            valorAposta = Number(document.getElementById("barraAposta").value)
            numeroSorteio = Number(Math.ceil(Math.random()*10))
            console.log(numeroSorteio)
            
        }
        
        function espinossauro(){
            
            document.getElementById("dino").innerHTML = "Dinossauro escolhido: Espinossauro"
            if(numeroSorteio == 1){
                valorAposta = valorAposta * 2
                document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
                dinoSorteado()
            }
            else{
                valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        } 
        
    }
    
    function tRex(){
        
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: T-rex"
        if(numeroSorteio == 2){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function branquiossauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Branquiossauro"
        if(numeroSorteio == 3){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valor
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function velocirraptor(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Velocirraptor"
        if(numeroSorteio == 4){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function estegossauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Estegossauro"
        if(numeroSorteio == 5){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function triceratopo(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Triceratopo"
        if(numeroSorteio == 6){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function anquilossauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Anquilossauro"
        if(numeroSorteio == 7){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }
    
    function parassauroloio(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Parassauroloio"
        if(numeroSorteio == 8){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }     
    }
    
    function alessauro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Alessauro"
        if(numeroSorteio == 9){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
        
    }
    
    function carnotouro(){
        document.getElementById("dino").innerHTML = "Dinossauro escolhido: Carnotouro"
        if(numeroSorteio == 10){
            valorAposta = valorAposta * 2
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }
        else{
            valorAposta = 0
            document.getElementById("dinheiro").innerHTML = "R$ " + valorAposta
            dinoSorteado()
        }   
    }

    function dinoSorteado(){
        if(numeroSorteio == 1){
            
            document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Espinossauro"
        }
        if(numeroSorteio == 2){
            
            document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: T-rex"
    }
    if(numeroSorteio == 3){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Branquiossauro"
    }
    if(numeroSorteio == 4){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Velocirraptor"
    }
    if(numeroSorteio == 5){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Estegossauro"
    }
    if(numeroSorteio == 6){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Triceratopo"
    }
    if(numeroSorteio == 7){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Anquilossauro"
    }
    if(numeroSorteio == 8){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Parassauro"
    }
    if(numeroSorteio == 9){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Alossauro"
    }
    if(numeroSorteio == 10){
        
        document.getElementById("dino_sorte").innerHTML = "Dinossauro sorteado: Carnotouro"
    }
    
}

let valorTotalRecebido, valorRepasse, valorTotalFinal, descontos,clientes = 0,
 descontoParaSeguradoras = "desconto",descontoresposta
function  lancarCliente(){
    clientes ++
    valorTotalRecebido = Number(document.getElementById("barraLancar").value)
    descontoParaSeguradoras = document.getElementById("descontoSeguradora").value
    valorRepasse =  Number(Math.ceil(valorTotalRecebido * 0.10)).toFixed(2)
    valorTotalFinal = Number(Math.ceil(valorTotalRecebido - valorRepasse)).toFixed(2)
    document.getElementById("valorRecebido").innerHTML = "Valor recebido: R$" +valorTotalRecebido
    document.getElementById("valorDoRepasse").innerHTML = "Valor do Repasse: R$" +valorRepasse
    document.getElementById("valorTotalFinal").innerHTML = "Lucro Total: R$" + valorTotalFinal
    document.getElementById("clientela").innerHTML = "Clientes: " + clientes
    
    document.getElementById("desconteSeguradora").innerHTML = ""
    document.getElementById("descontoresposta").innerHTML = ""
    
    if(descontoParaSeguradoras != ''){
        if(descontoParaSeguradoras == "desconto"){
            
            clientes = clientes * 0
            descontos = valorTotalFinal * 0.30
            valorTotalFinal = Number(Math.ceil(valorTotalFinal - descontos)).toFixed(2)
            document.getElementById("valorTotalFinal").innerHTML = "Lucro Total: R$" + valorTotalFinal
            document.getElementById("valorDoRepasse").innerHTML = "Valor do Repasse: -"
            document.getElementById("desconteSeguradora").innerHTML = "Valor com 30% de desconto para aseguradoras: R$" + valorTotalFinal
            document.getElementById("descontoresposta").innerHTML = "codigo aceito"
            
        }else if(descontoParaSeguradoras != "descontoparaseguradoras"){
            document.getElementById("descontoresposta").innerHTML = "codigo não existe, tenta de novo"
        }

    }

     if(clientes == 10){
        descontos = valorTotalFinal * 0.05
        valorTotalFinal = valorTotalFinal - descontos
        document.getElementById("desconte").innerHTML = "Valor com 5% de desconto: R$" + valorTotalFinal
    }
    else if(clientes > 10){
        clientes = 1
        document.getElementById("desconte").innerHTML = " "
        
    }
    // document.getElementById('barraLancar').focus()
}

