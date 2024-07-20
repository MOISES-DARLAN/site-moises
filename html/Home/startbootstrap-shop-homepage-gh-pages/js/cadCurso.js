const titulo = document.getElementById("titulo");
const imagem = document.getElementById("imagem");
const link = document.getElementById("link");

const btnCadastrar = document.querySelector(".btn-primary");

btnCadastrar.addEventListener("click", (event) => {
  event.preventDefault();

  if(!titulo.value || !imagem.value || !link.value) {
    return alert("Preencha todos os campos");
  }

  else{
    cadastrar();
  }
  
});

async function cadastrar() {
  const url = "https://demo-project34821.p.rapidapi.com/catalog/product";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "7bafdafc62msh006083d103e5d7cp107b09jsn07382e7df8ff",
      "x-rapidapi-host": "demo-project34821.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: titulo.value,
      price: 3,
      manufacturer: imagem.value,
      category: "MDCURSOSFREE",
      description: link.value,
      tags: "CURSOS",
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
}
