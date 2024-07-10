const nav = document.querySelector('.nav-load');


const navLoad = ` <div class="container">
                         <a href="index.html" style="text-decoration: none;">
                              <h1 class="h1-custom">Moisés resumos</h1>
                         </a>

                         <button
                              class="navbar-toggler ms-auto"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#nav-principal"
                              aria-controls="navbarNavAltMarkup"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="50"
                                   fill="currentColor"
                                   class="bi bi-card-list"
                                   viewBox="0 0 16 16"
                              >
                                   <path
                                        d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                                        class="text-white"
                                   />
                                   <path
                                        d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                                        class="text-white"
                                   />
                              </svg>
                         </button>
                         <div
                              class="collapse navbar-collapse ms-auto"
                              id="nav-principal"
                         >
                              <ul class="navbar-nav ms-auto nav-pills text-center">
                                   <li class="nav-item ">
                                        <a href="index.html" class="nav-link btn-entrar">Entrar</a>
                                   </li>

                                   <li class="nav-item btn-cursos">
                                        <a href="/html/home/startbootstrap-shop-homepage-gh-pages/index.html" class="nav-link">Cursos</a>
                                   </li>
                              </ul>
                         </div>
                    </div>`

function navloadfunction(){
    nav.innerHTML += navLoad
}

navloadfunction()

