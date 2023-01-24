function getProductsUrl(keyword) {
    return `https://api.spaceflightnewsapi.net/v3/blogs${keyword}`;
}

function getProduct(keyword) {
    // AJAX Code
    const ajax = new XMLHttpRequest();
    ajax.onload = function(){
        const data = JSON.parse(ajax.responseText);
        clearProduct();
        displayProducts(data);
    }


    const url = getProductsUrl(keyword)
    ajax.open("GET", url)
    ajax.send();

    // tidak bisa dilakukan secara sync
    // const response = JSON.parse(ajax.responseText);
    // console.log(response);
}

function clearProduct() {
    const productUl = document.getElementById("products")
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.foreach((product) => {
        displayProducts(product)
    })
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products")
    productUl.appendChild(productLi);
}

function buttonClick() {
    getProduct(document.getElementById("keyword").value)
    console.log("success click button");
}