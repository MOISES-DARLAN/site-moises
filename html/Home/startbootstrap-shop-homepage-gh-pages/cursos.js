let $depoimentos = document.querySelector("#cursos");


const bd = 
    [
        {
            id: 1,
            title: "Curso em vídeo - Python",
            img: "https://i.ytimg.com/vi/S9uPNppGsGo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD3tGH0TqvdXHXJeCZuWGqjbWULig",
            iframe: "https://www.youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0"
        },
        {
            id: 2,
            title: 'Curso de Javascript Completo',
            img: "https://i.ytimg.com/vi/vEwPnjqWQ-g/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkTOV0l-Eg99hv3hBCP8AXdxC_xA",
            iframe: 'https://www.youtube.com/playlist?list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw'
        },
        {
            id: 3,
            title: 'CURSO DE JAVA - PROGRAMAÇÃO',
            img: "https://i.ytimg.com/vi/mRryrODqQcw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPVUGTe5qcDczxkifTkwTQCQWDgw",
            iframe: 'https://www.youtube.com/playlist?list=PLJ0AcghBBWSi6nK2CUkw9ngvwWB1gE8mL'
        },
        {
            id: 4,
            title: "Inglês | Curso Gratuito Completo",
            img: 'https://i.ytimg.com/vi/rrUBcqRJFHI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnSRVDkkeZFM3hzBUvwFJgWdsxAg',
            iframe: "https://www.youtube.com/playlist?list=PLvnDcR9zJ3ToYT9CcWdY3hNuBh4FY99J5"
        },
        {
            id: 5,
            title: 'Curso de Linguagem C - 2022 (Gratuito)',
            img: 'https://i.ytimg.com/vi/2w8GYzBjNj8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADaagxmEXRxqxkITXvB5WeBz6TRA',
            iframe: 'https://www.youtube.com/playlist?list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2'
        },
        {
            id: 6,
            title: 'Curso de Lógica de Programação',
            img: 'https://i.ytimg.com/vi/8mei6uVttho/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAeMYmh6Nqfw2DxDJ4Gpud_Alxqeg',
            iframe: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV'
        },
        {
            id: 7,
            title: 'Curso de Programação C#',
            img: 'https://i.ytimg.com/vi/dVzJ3bx68FA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCGmGaqXINg2nnIlemsgwmWtOKQKg',
            iframe: 'https://www.youtube.com/playlist?list=PLx4x_zx8csUglgKTmgfVFEhWWBQCasNGi'
        },
        {
            id: 8,
            title: "CS50 2024 - Curso de Introdução à Programação de Harvard",
            img: 'https://i.ytimg.com/vi/mR6jktYAOqs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLADR7vV2wAjpCu3o9XkLykDKeRvbA'
        },
        {
            id: 9,
        title: 'Curso de Java para Iniciantes - Grátis, Completo e com Certificado',
           img:  'https://i.ytimg.com/vi/sTX0UEplF54/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAieJQq_q-Nt9HHH1tZ6UgcyCB6dA',
           iframe: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR'
    },
    {
        id: 10,
        title: "Curso de Hardware Grátis",
        img: 'https://i.ytimg.com/vi/iT6E92Kt38o/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLApZhCn_R6PFtgTLAhA1PS9fWR65A',
        iframe: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dn1JHgN9wpbIUhzZmycYQXW'
    }


        
    ]
    


bd.forEach(data => carregarDepoimentos(data));
function carregarDepoimentos(data) {
    $depoimentos.innerHTML += `
              <div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="${data.img}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${data.title}</h5>

                Grátis
            </div>

            
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="${data.iframe}">Ver mais</a></div>
        </div>
    </div>
</div>`;
}

carregarDepoimentos()