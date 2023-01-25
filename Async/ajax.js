function getUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

// Function Get URL 😎👆


function getDatas(keywordGetUrl) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", getUrl(keywordGetUrl));
    // AJAX (method, url)
    ajax.send();
    ajax.onload = () => {
        const data = JSON.parse(ajax.response);
        if (ajax.status === 200) {
            console.log(JSON.parse(ajax.response));
        } else {
            console.log("error");
        }

        clearDatas();
        //call function😎👆;

        displayDatas(data);
        //call function😎👆;
        
    };
        //AJAX code... 😎👆
}

function clearDatas() {
    const parentUl = document.getElementById("list-data")
    parentUl.textContent = "";
}


function displayDatas(datas) {
    datas.data.products.map((datas) => {
        displayData(datas)
    })

    // Object array
}


function displayData(data) {
    const displayDataLi = document.createElement("li");
    displayDataLi.textContent = data.name;
    // create & buat element <li> dan panggil data (data.name(bersifat object));


    const parentUl = document.getElementById("list-data");
    parentUl.appendChild(displayDataLi);
}

function buttonClick() {
    getDatas(document.getElementById("keyword").value)
}