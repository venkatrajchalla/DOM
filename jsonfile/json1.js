let container = document.createElement("div")
container.className = "container"

function fetchData() {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(err => console.erroe(err))
}


function displayData(products) {
    for (let obj of products) {
        let item = document.createElement("div")
        item.className = "item"
        item.innerHTML = `
            <img class='image' src='${obj.image}''>
            <p class='title'> ${obj.title}</p>
            <p class='category'>${obj.cotegory}</p>
            <p class='price'>${obj.price}</p>
            <p class='rating'>${obj.rating.rate}<p/>
        `;
        container.appendChild(item)
    }
    document.body.appendChild(container)
}
fetchData()