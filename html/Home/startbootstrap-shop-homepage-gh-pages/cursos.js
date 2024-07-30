let $depoimentos = document.querySelector("#cursos");
let $carregarMais = document.querySelector("#carregarMais");
let totalCursosCarregados = 0
loading();
acessToServer(0);




async function getProducts(category, pulo=0) {
  const url = `https://demo-project34821.p.rapidapi.com/catalog/category/${category}/products?skip=${pulo}&limit=4`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7bafdafc62msh006083d103e5d7cp107b09jsn07382e7df8ff",
      "x-rapidapi-host": "demo-project34821.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.products;
    totalCursosCarregados += 4
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getProductsById(data) {
  let cursos = [];
  for (const idcursos of data) {
    const url = `https://demo-project34821.p.rapidapi.com/catalog/product/${idcursos.id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7bafdafc62msh006083d103e5d7cp107b09jsn07382e7df8ff",
        "x-rapidapi-host": "demo-project34821.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      cursos.push(result);
    } catch (error) {
      console.log(error);
    }
  }
  return cursos;
}

async function acessToServer(pulo) {


    try {    
        const bd = await getProducts("MDCURSOSFREE", pulo);
        const cursos = await getProductsById(bd);
        cursos.forEach((data) => { 
            console.log(data)
            carregarDepoimentos(data)});
    }catch (error) {
        alert('erro ao acessar o servidor:', error)
    }

    removeLoading();

    
    
}

function carregarDepoimentos(data) {
  console.log(data);
  $depoimentos.innerHTML += `
    <div class="col mb-5">
      <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="${data.manufacturer}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${data.name}</h5>
            Grátis
          </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="${data.description}">Ver mais</a></div>
        </div>
      </div>
    </div>`;
}

function loading(numCards = 8) {
  for (let i = 0; i < numCards; i++) {
    $depoimentos.innerHTML += `
     <div class="col mb-5">
    <div class="card h-100 mb-5 mx-1  loading" aria-hidden="true">
                        
                        <div class="card-body">
                          <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                          </h5>
                          <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                          </p>
                          <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                        </div>
                      </div>
                      </div>`;

}

}

function removeLoading() {
  const cards = document.querySelectorAll(".loading");
  cards.forEach((card) => {
    card.classList.add('d-none');
  })
}

$carregarMais.addEventListener("click", () => {
  loading(4);
  acessToServer(totalCursosCarregados);
});