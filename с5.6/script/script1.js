document.querySelector(".btn").addEventListener("click", () => {
    let valArr = getValue();
    if (valArr[0] < 100 || valArr[0] > 300 || valArr[1] < 100 || valArr[1] > 300) {
        errMassage();
    } else {
        let newUrl = urlHandler(valArr);
        sendRequest(newUrl, showImg);
    }
});

function getValue() {
    let val1 = document.getElementById("w").value;
    let val2 = document.getElementById("h").value;
    return [val1, val2];
};

function errMassage() {
    document.querySelector(".pictures").innerHTML = "Введённые цифры должны быть в диапазоне от 100 до 300";
    setTimeout(() => document.querySelector(".pictures").innerHTML = "", 3500);
};

function urlHandler(arr, url = "https://picsum.photos/200/300") {
    let currUrl = url.split("/");
    currUrl[currUrl.length - 2] = arr[0];
    currUrl[currUrl.length - 1] = arr[1];
    currUrl = currUrl.join("/");
    return currUrl;
};

function showImg(apiImg) {
    document.querySelector(".pictures").innerHTML = `
    <img src="${apiImg}">
    `;
};

function sendRequest(url, callback) {
    fetch(url)
    .then(response => {
        if (response.status !== 200)
            throw error
        else
            return response;
    })
    .then(response => {
        if (callback)
            callback(response.url);
    })
    .catch((e) => console.log("error" + e.message))
};
