// Abrir e fechar sidebar
function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "350px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "350px";
    }
}

// Lógica de envio do formulário (Feedback visual)
const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    const data = new FormData(event.target);
    
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "✅ Mensagem enviada com sucesso!";
            status.style.color = "#f7b801";
            form.reset();
            setTimeout(() => { toggleNav(); }, 2000);
        } else {
            status.innerHTML = "❌ Erro ao enviar. Tente novamente.";
            status.style.color = "#f35b04";
        }
    }).catch(error => {
        status.innerHTML = "❌ Ocorreu um problema de conexão.";
    });
});