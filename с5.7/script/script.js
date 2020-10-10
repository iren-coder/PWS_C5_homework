let page_pic = localStorage.getItem("page_pic");
onload =  function() {
    if (page_pic) {
        let savedPic = JSON.parse(page_pic);
        showImgs(savedPic);
    }
}


document.querySelector(".btn").addEventListener("click", () => {
            let inputValList = getInputValues();

            if ((inputValList[0] < 1 || inputValList[0] > 10) && (inputValList[1] < 1 || inputValList[1] > 10))
                document.querySelector(".pictures").innerHTML = "Номер страницы и лимит вне диапазона 1-10";
            else if (inputValList[0] < 1 || inputValList[0] > 10)
                document.querySelector(".pictures").innerHTML = "Номер страницы вне диапазона 1-10";
            else if (inputValList[1] < 1 || inputValList[1] > 10)
                document.querySelector(".pictures").innerHTML = "Лимит вне диапазона 1-10";
            else {
                let currUrl = urlHandler(inputValList);
                sendRequest(currUrl, showImgs);
            }
        });

        function getInputValues() {
            let val1 = document.getElementById("page_num").value;
            let val2 = document.getElementById("lim").value;

            return [val1, val2];
        }

function urlHandler(arr, url = "https://picsum.photos/v2/list?page=1&limit=10") {
            let currUrl = url.split("&");
            currUrl[0] = currUrl[0].split("=");
            currUrl[0][1] = arr[0];
            currUrl[0] = currUrl[0].join("=");

            currUrl[1] = currUrl[1].split("=");
            currUrl[1][1] = arr[1];
            currUrl[1] = currUrl[1].join("=");

            currUrl = currUrl.join("&");
            return currUrl;
        }

        function showImgs(apiData) {
            let cards = "";
            for (let i = 0; i < apiData.length; i++) {
                const card = `
                <img class="card" src="${apiData[i].download_url}">
                `;
                cards += card;
            }
            document.querySelector(".pictures").innerHTML = cards;
        }

        function sendRequest(url, callback) {
            fetch(url)
                .then(response => {
                    if (response.status !== 200)
                        throw error
                    else
                        return response;
                })
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem("page_pic", JSON.stringify(data));
                    if (callback)
                        callback(data)
                })
                .catch((e) => {
                    console.log("Error" + e.message);
                    console.log(e.response);
                })
        }