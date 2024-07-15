const titulo = document.getElementById("titulo");
const imagem = document.getElementById("imagem");
const link = document.getElementById("link");

const btnCadastrar = document.querySelector(".btn-primary");

btnCadastrar.addEventListener("click", (event) => {
    event.preventDefault();
    cadastrar();
})

async function cadastrar() {

    const dados = {
        titulo: titulo.value,
        img: imagem.value,
        link: link.value
    }
    const response = await fetch("https://api-cursos-gratis.onrender.com/cadastrarcursos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }).then(()=>{
        window.location.href = "/html/Home/startbootstrap-shop-homepage-gh-pages/index.html";
    });
    const data = await response.json();
    
}