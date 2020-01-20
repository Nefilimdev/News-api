let buttonClick = document.getElementById('btn');
let board = document.getElementById('board');

buttonClick.addEventListener('click', ()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=cd7e2122813b421d86f839fbfa41e53b")
    .then(response=> response.json())
    .then(json=>{
        console.log(json.articles)
        mostrarNaTela(json.articles);
    })

    // let listaNoticias = (await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=cd7e2122813b421d86f839fbfa41e53b")).json();
    // console.log(listaNoticias);
})

let mostrarNaTela = listaNoticias =>{
    listaNoticias.forEach(function(noticia, posicao){
        let card = `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${noticia.urlToImage}" alt="img">
                        <div class="card-body">
                        <h5 class="card-title">${noticia.title}</h5>
                            <p class="card-text">${noticia.description}</p>
                        <a href="#" class="btn btn-primary">Visitar</a>
                    </div>
                </div>`

    board.innerHTML += card;

    })

    
}

//title / description / urlToImage