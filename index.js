function fetchproducts(){
    fetch('localhost:5500/products')
    .then((response)=>response.json())
    .then((data)=>console.log(data));
    console.log(products[1])
}
fetchproducts()

function fetchFruits(){
    fetch('localhost:5000/products/fruits')
    .then((response)=>response.json())
    .then((data)=>console.log(data));
    for(fruits in products){
        console.log(fruits)
    }
}
fetchFruits()

function fetchveg(){
    fetch('localhost:5500/products/vegatables')
    .then((response)=>response.json())
    .then((data)=>console.log(data));
    for(vegatables in products){
        console.log(vegatables)
    }
}
fetchveg()