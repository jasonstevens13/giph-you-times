// Making sure we wait to attach our handlers until the DOM is fully loaded. Using jquery here...
$(function () {

    // creates a new giphed article in the articles table of the database
    $(".giph-card1").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newGiphedArticle = {
            title: $("#headline1").text(),
            abstract: $("#abstract1").text(),
            url: $("#giphUrl1").val(),
            user: $("#userName1").val()
        };

        // Send the POST request.
        $.ajax("/api/articles", {
            type: "POST",
            data: newGiphedArticle
        }).then(
            function () {
                console.log("created new giphed article");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    $(".giph-card2").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newGiphedArticle = {
            title: $("#headline2").text(),
            abstract: $("#abstract2").text(),
            url: $("#giphUrl2").val(),
            user: $("#userName2").val()
        };

        // Send the POST request.
        $.ajax("/api/articles", {
            type: "POST",
            data: newGiphedArticle
        }).then(
            function () {
                console.log("created new giphed article");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });



    $(".giph-card3").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newGiphedArticle = {
            title: $("#headline3").text(),
            abstract: $("#abstract3").text(),
            url: $("#giphUrl3").val(),
            user: $("#userName1").val()
        };

        // Send the POST request.
        $.ajax("/api/articles", {
            type: "POST",
            data: newGiphedArticle
        }).then(
            function () {
                console.log("created new giphed article");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });


    $(".giph-card4").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newGiphedArticle = {
            title: $("#headline4").text(),
            abstract: $("#abstract4").text(),
            url: $("#giphUrl4").val(),
            user: $("#userName1").val()
        };

        // Send the POST request.
        $.ajax("/api/articles", {
            type: "POST",
            data: newGiphedArticle
        }).then(
            function () {
                console.log("created new giphed article");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });


    $(".giph-card5").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newGiphedArticle = {
            title: $("#headline5").text(),
            abstract: $("#abstract5").text(),
            url: $("#giphUrl5").val(),
            user: $("#userName5").val()
        };

        // Send the POST request.
        $.ajax("/api/articles", {
            type: "POST",
            data: newGiphedArticle
        }).then(
            function () {
                console.log("created new giphed article");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });




    $(".giph-card6").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newGiphedArticle = {
            title: $("#headline6").text(),
            abstract: $("#abstract6").text(),
            url: $("#giphUrl6").val(),
            user: $("#userName6").val()
        };

        // Send the POST request.
        $.ajax("/api/articles", {
            type: "POST",
            data: newGiphedArticle
        }).then(
            function () {
                console.log("created new giphed article");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });
















    $("#giphUrl").val('');

    document.readyState;

});

