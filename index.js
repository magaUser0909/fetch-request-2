const cards = document.querySelector('.cards')

fetch('https://dog.ceo/api/breeds/image/random/8')
    .then(response => response.json())
    .then(data => {
        addCard(data.message)
    })


function addCard(arr) {
    arr.forEach(elem => {
        let html = `
            <div class="card">
                <div class="img">
                    <span class="close">x</span>
                    <img class="img-dogs" src="${elem}" alt="cats">
                </div>
                <div class="heart">
                    <img class="heart-click" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-inGdeOy8lOrex7hJMB_HXq9U8X-YqVmsucO4_xM&s"
                    >
                </div>
            </div>
        `
        cards.innerHTML += html
    })
}