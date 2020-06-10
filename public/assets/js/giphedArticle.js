// Making sure we wait to attach our handlers until the DOM is fully loaded. Using jquery here...
$(function () {

    // creates a new giphed article in the articles table of the database
    $(".giph-card").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("Submit button clicked!!!!");


        let newGiphedArticle = {
            title: $(".titles").val(),
            abstract: $(".abstracts").val(),
            url: $("#giphUrl").val()

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

