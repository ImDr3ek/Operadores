// let idade = [18,20,12,35,15,14]
let precos = []
let total = 0;
//let i = 0
const produtos = ["Notebook", "Mouse", "Teclado", "Monitor", "Impressora", "Webcam", "Headset",
    "Caixa de Som", "HD Externo", "SSD 1TB", "Pendrive 64GB", "Roteador Wi-Fi", "Smartphone",
    "Tablet", "Smartwatch", "Carregador USB", "Cabo HDMI", "Cabo USB-C", "Fonte de Alimentação",
    "Placa de Vídeo", "Processador", "Memória RAM 16GB", "Placa-Mãe", "Gabinete Gamer",
    "Cooler para CPU", "Microfone", "Câmera Digital", "Projetor", "TV 50 Polegadas",
    "Controle Sem Fio", "Console de Videogame", "Joystick", "Cadeira Gamer",
    "Mesa para Escritório", "Luminária LED", "Ventilador", "Ar-Condicionado",
    "Cafeteira Elétrica", "Liquidificador", "Air Fryer", "Forno Elétrico", "Geladeira",
    "Máquina de Lavar", "Aspirador de Pó", "Ferro de Passar", "Batedeira", "Panela Elétrica",
    "Purificador de Água", "Fogão 4 Bocas", "Filtro de Linha"];
// function ativarArray00(){
//     let i = 0
//     for(let i = 0;i < idade.length; i++)
//         console.log(idade[i])
// }

//     function ativarPreco(){
//         while(precos.length<produtos.length){
//             i = Math.ceil(Math.random()*100)
//             precos.push(i)

//     console.log(precos);
//     }
// }

function ativarProdutos() {
    document.getElementById('lista-precos').innerHTML = ''
    for (let i = 0; i < produtos.length; i++) {
        // console.log(produtos[i])
        document.getElementById('lista-precos').innerHTML += '<button  onclick= "agregarNoCarrinho(' + i + ')" class="produtos" id="' + i + '"> ' + produtos[i] + '</button>'
        j = Math.ceil(Math.random() * 1400)
        precos.push(j)

    }
    console.log(produtos)
    console.log(precos)
}


function agregarNoCarrinho(p) {


    // alert('produto ' + produtos[p] + " valor " + precos[p])
    // console.log("esse é o p " + precos[p]) 
    let valor = precos[p];
    console.log("valor " + valor);
    total = total + valor;
    console.log("Valor total:" + total);
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$' + total.toFixed(2);
    document.getElementById('listaVendas').innerHTML += 'produto:' + produtos[p] +
    '<br>'
    document.getElementById('listaVendas').value = ''
}