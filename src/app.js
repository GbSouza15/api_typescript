"use strict";
const input = document.getElementById('camp-search');
const btn = document.getElementById('btn-search');
const cards = document.querySelector('.list-card');
function createCards(response) {
    if (response.length == 0) {
        alert('Não foi possível encontrar uma resposta!');
    }
    response.map((item) => {
        const createLi = document.createElement('li');
        createLi.innerHTML = `
            <div class="card-header">
                    <h3>${item.title}</h3>
                </div>
                <div class="card-body">
                    <p>${item.snippet}</p>
                </div>
                <div class="card-footer">
                    <a href="https://en.wikipedia.org/?curid=${item.pageid}" target="_blank">Leia mais...</a>
                </div>
        `;
        cards.appendChild(createLi);
    });
}
btn.addEventListener('click', (e) => {
    cards.innerHTML = '';
    e.preventDefault();
    let srSearch = input.value;
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${srSearch}&format=json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        let response = data.query.search;
        createCards(response);
        console.log(response);
    });
});
