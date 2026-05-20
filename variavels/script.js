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

