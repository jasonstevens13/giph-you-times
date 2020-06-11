$(document).ready(function () {

    let titlesArray = [];
    let abstractsArray = [];
    let imgArray = [];

    console.log("This is running");
    // Getting the top 6 articles: 
    $.ajax({
        url: "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=HrgfisQfKEMuQmyrSDSuIG1cnftR8iRV",
        method: "GET"
    }).then(function (response) {

        for (let i = 0; i < 6; i++) {
            titlesArray.push(response.results[i].title);
            abstractsArray.push(response.results[i].abstract);
            imgArray.push(response.results[i].multimedia[0].url);
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
        // Display imgs from NYT
        document.getElementById("card1").innerHTML = `<img id="img1" src="${imgArray[0]}" class="card-img-top"></img>`;
        document.getElementById("card2").innerHTML = `<img id="img1" src="${imgArray[1]}" class="card-img-top"></img>`;
        document.getElementById("card3").innerHTML = `<img id="img1" src="${imgArray[2]}" class="card-img-top"></img>`;
        document.getElementById("card4").innerHTML = `<img id="img1" src="${imgArray[3]}" class="card-img-top"></img>`;
        document.getElementById("card5").innerHTML = `<img id="img1" src="${imgArray[4]}" class="card-img-top"></img>`;
        document.getElementById("card6").innerHTML = `<img id="img1" src="${imgArray[5]}" class="card-img-top"></img>`;

    });

});




