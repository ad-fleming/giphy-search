// console.log("hello world");

$(document).ready(function(){

    // DOM VARIABLES

    // JS VARIABLES

    // FUNCTION CALLS

    // EVENT LISTENERS

    $("#search-form").on("submit", function(event){
        event.preventDefault();
        console.log("you submitted the form");
        var searchTerm = $("#search-term").val();
        console.log(searchTerm);
        // if(searchTerm.length < 1){
        //     alert("Please enter a valid search term");
        // }else{
        //     whatever we're going to do
        // }
        var apiKey = i7E4lNSbmQIQPm5PrDb6VAyNv6zxe7CQ
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=5&q=" + searchTerm;
    });

});