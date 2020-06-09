
$(document).ready(function () {

    $("#searchGiphBtn").on("click", function (event) {
        event.preventDefault();


        let searchGiphValue = $("#searchGiphValue").val();

        let apiKey = "va43vek2CSq4SHRgb7Y8r3ZW47Yh3YtQG";

        let queryURL = "ttp://api.giphy.com/v1/gifs/search?q=" + searchGiphValue + "&api_key=" + apiKey + "&limit=10";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            let responseArray = response.data;

            for (let i = 0; i < responseArray.length; i++) {


                let gif = `<div id=${responseArray[i].id}><iframe src=${responseArray[i].embed_url} width="200" height="200" frameBorder="0"
                class="giphy-embed" allowFullScreen></iframe></div><br>`;

                // updates result list here
                $("#giphyApiResults").append(gif);

            }

            document.readyState;



        });



    });


});
