$(document).ready(function () {

    let titlesArray = [];
    let abstractsArray = [];

    console.log("This is running");
    // Getting the top 6 political articles: 
    $.ajax({
        url: "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=HrgfisQfKEMuQmyrSDSuIG1cnftR8iRV",
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log("Title: " + response.results[0].title + " Abstract: " + response.results[0].abstract)
        for (let i = 0; i < 6; i++) {
            titlesArray.push(response.results[i].title);
            abstractsArray.push(response.results[i].abstract);
        }
        console.log(titlesArray);
        console.log(abstractsArray);
        // Displaying headlines: 
        document.getElementById("headline1").innerHTML = titlesArray[0];
        document.getElementById("headline2").innerHTML = titlesArray[1];
        document.getElementById("headline3").innerHTML = titlesArray[2];
        document.getElementById("headline4").innerHTML = titlesArray[3];
        document.getElementById("headline5").innerHTML = titlesArray[4];
        document.getElementById("headline6").innerHTML = titlesArray[5];
        // Displaying abstracts:
        document.getElementById("abstract1").innerHTML = abstractsArray[0];
        document.getElementById("abstract2").innerHTML = abstractsArray[1];
        document.getElementById("abstract3").innerHTML = abstractsArray[2];
        document.getElementById("abstract4").innerHTML = abstractsArray[3];
        document.getElementById("abstract5").innerHTML = abstractsArray[4];
        document.getElementById("abstract6").innerHTML = abstractsArray[5];

    });

});











// $(document).ready(function () {


//     event.preventDefault();

//     // let apiKey = "vLDTAtFVhXGrIDYFWRJkmfUhJoPVLRhG";

//     let queryURL = "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=HrgfisQfKEMuQmyrSDSuIG1cnftR8iRV";


//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {

//         let responseArray = [responseArray.results];

//         for (let i = 0; i < responseArray.length; i++) {


//             let section = responseArray[i].section;
//             let subsection = responseArray[i].subsection;
//             let title = responseArray[i].title;
//             let abstract = responseArray[i].abstract;
//             let url = responseArray[i].url;
//             let id = response[i].id;

//             // vars for updating search list in DOM
//             let div = $("<div>", { id: id });
//             let h = $("<h2>", { text: title });
//             let p = $("<p>", { text: abstract });
//             let p2 = $("<p>", { text: url });
//             let br = $("<br>");

//             // updates search list here
//             $("#nytApiResults").append(div);
//             $(div).append(h);
//             $(h).append(p);
//             $(p2).append(p);
//             $("#nytApiResults").append(br);


//         }

//         document.readyState;



//     });


// });
