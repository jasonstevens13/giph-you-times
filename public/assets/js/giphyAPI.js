
// $(document).ready(function () {

//     $("#searchGiphBtn").on("click", function (event) {
//         event.preventDefault();

//         let searchGiphValue = $("#searchGiphValue").val().trim();

//         let apiKey = "MAXynpYLbQF9j38rvvgC5NsiSPsvz3vR";

//         let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchGiphValue + "&api_key=" + apiKey + "&limit=10";

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function (response) {

//             let responseArray = response.data;

//             for (let i = 0; i < responseArray.length; i++) {


//                 let gif = `<div id=${responseArray[i].id}><iframe src=${responseArray[i].embed_url} width="200" height="200" frameBorder="0"
//                 class="giphy-embed" allowFullScreen></iframe></div><br>`;

//                 // updates result list here
//                 $("#giphyApiResults").append(gif);
//             }
//             $("#searchGiphValue").val('');
//             document.readyState;
//         });
//     });

// });
