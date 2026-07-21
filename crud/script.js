// C >> create >> cadastrar 
// R >> read >> ler 
// U >> Update >> atualizar
// D >> delete >> apagar



let dinos = []

function salvarDados(){
    localStorage.setItem(
        'dinos', JSON.stringify(dinos)
    )
}

function carregarDados(){
   dinos = JSON.parse(localStorage.getItem('dinos'))
}

function cadastrarDino(){

    carregarDados()
    const novodino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: document.getElementById('input-altura').value,
        cor: document.getElementById('input-cor').value,
        custo: Number(document.getElementById('input-preco').value)
    }

// for(let i = 0; i <= dinos.length; i++){
//     novodino.id ++ 
// }

if(novodino.nome == '' && novodino.altura == '' && novodino.cor == '' && novodino.custo == ''){
    alert('completa o formulario!!')
}else{
    dinos.push(novodino)
}

    console.log(dinos);

    limparFormulario()
   mostrarTodos()
}

function limparFormulario(){


     document.getElementById('input-nome').value = ''
     document.getElementById('input-altura').value = ''
     document.getElementById('input-cor').value = ''
     document.getElementById('input-preco').value = ''
     document.getElementById('input-id').value = ''
     
     
     
     document.getElementById('input-nome').focus()
}
    
function mostrarTodos(){
document.getElementById('painelDinos').innerHTML = " "
for(let i = 0; i < dinos.length; i++){
    document.getElementById("painelDinos").innerHTML += `
    <div class="card-dino">
    <h2>${dinos[i].nome}</h2>
    <p>altura: ${dinos[i].altura}</p>
    <p>cor: ${dinos[i].cor}</p>
    <p>custo: ${dinos[i].custo}</p>
    <p>id: ${dinos[i].id}</p>
    </div>
    `
}

}

function pesquisar(){
    let nomeProcurar = document.getElementById('input-nome').value
    for(let i = 0; i<dinos.length; i++)
        if(nomeProcurar == dinos[i].nome ){
            document.getElementById('input-altura').value = dinos[i].altura
            document.getElementById('input-cor').value = dinos[i].cor
            document.getElementById('input-preco').value = dinos[i].custo
            document.getElementById('input-id').value = dinos[i].id

        }
        
    }
    
    function salvarDino(){
        let id = Number(document.getElementById('input-id').value)
        for(let i = 0; i<dinos.length; i++)
            if(id == dinos[i].id ){

            dinos[i].nome = document.getElementById('input-nome').value
            dinos[i].altura = document.getElementById('input-altura').value
            dinos[i].cor = document.getElementById('input-cor').value  
            dinos[i].custo = document.getElementById('input-preco').value 
            dinos[i].id = document.getElementById('input-id').value 
    
            }

mostrarTodos()
limparFormulario()
}

function eliminarDino(){
            let id = Number(document.getElementById('input-id').value)
    for(let i = 0; i<dinos.length; i++)
        if(id == dinos[i].id ){
            dinos.splice(i, 1)

            }
            mostrarTodos()
            limparFormulario()
}