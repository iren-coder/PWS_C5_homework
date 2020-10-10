document.querySelector(".btn").addEventListener("click", () => {
        let num = document.querySelector(".input-value").value;
        if (num <= 0 || num > 10)
            invalidNumber()
        else {
            let currURL = urlHandler(num);
            sendRequest(currURL, displayResult);
        }
    });

    function invalidNumber() {
        return (() => {document.querySelector(".pictures").innerHTML = "Введённая цифра должна быть в диапазоне от 1 до 10";
            setTimeout(() => {
                document.querySelector(".pictures").innerHTML = "Беспроигрышная лотерея! Какую цифру введёшь - столько картинок и получишь Вводи цифры от 1 до 10!";
            }, 3500)})();
    }

    function urlHandler(num, url = "https://picsum.photos/v2/list?limit=10") {
        let currUrl = url.split("=");
        currUrl[1] = num;
        currUrl = currUrl.join("=");
        return currUrl;
    }

    function sendRequest(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log("Response status: ", xhr.status);
            } else {
                let result = JSON.parse(xhr.response);
                if (callback)
                    callback(result);
            }
        };

        xhr.onerror = function() {
            console.log("Error! Response status: ", xhr.status);
        };

        xhr.send();
    }

    function displayResult(apiResp) {
        let cards = "";
        apiResp.forEach(item => {
            const card = `
            <div class="card">
                <img src="${item.download_url}" class="card-picture"/>
            </div>
            `;
            cards += card;
        });
        document.querySelector(".pictures").innerHTML = cards;
    }