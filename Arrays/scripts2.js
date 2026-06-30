let idade = [18,20,12,35,15,14]
let precos = []
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
function ativarArray00(){
    let i = 0
    for(let i = 0;i < idade.length; i++)
        console.log(idade[i])
}

function ativarPreco(){
    let n = Math.floor(Math.random()*100)
    precos.push(n)
    document.getElementById('lista-precos').innerHTML = ''
    for(let i = 0; i<precos.length; i++){
        document.getElementById('lista-precos').innerHTML +=  precos[i] + ' - '
        console.log(precos[i]);
        
    }
}
function ativarProdutos(){
    document.getElementById('lista-precos').innerHTML = ''
    for(let i = 0;i < produtos.length; i++){
        console.log(produtos[i])
        document.getElementById('lista-precos').innerHTML +=  '<p class="produtos">' + produtos[i] + '</p>'
    }
}