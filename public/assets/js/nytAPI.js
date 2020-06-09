$(document).ready(function () {

    $("#nytApiResults").on("load", function (event) {
        event.preventDefault();

        let apiKey = "vLDTAtFVhXGrIDYFWRJkmfUhJoPVLRhG";

        let queryURL = "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=" + apiKey;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            let responseArray = response.results;

            for (let i = 0; i < responseArray.length; i++) {


                let section = responseArray[i].section;
                let subsection = responseArray[i].subsection;
                let title = responseArray[i].title;
                let abstract = responseArray[i].abstract;
                let url = responseArray[i].url;
                let id = [i];

                // vars for updating search list in DOM
                let div = $("<div>", { id: id });
                let h = $("<h2>", { text: title });
                let p = $("<p>", { text: abstract });
                let p2 = $("<p>", { text: url });
                let br = $("<br>");

                // updates search list here
                $("#nytApiResults").append(div);
                $(div).append(h);
                $(h).append(p);
                $(p2).append(p);
                $("#nytApiResults").append(br);


            }

            document.readyState;



        });



    });


});
