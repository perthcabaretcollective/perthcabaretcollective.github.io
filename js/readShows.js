console.log(dataShows) // {"a" : "b", "c" : "d"}
var showPage = document.getElementById("showPage");
var shows = "<hr />";
var i;
for (i = 0; i < dataShows.length; i++) {
    var showTitle = dataShows[i].title;
    var showVenue = dataShows[i].venue;
    var showVenueLink = dataShows[i].venueLink;
    var showImage = dataShows[i].image;
    var showDesc = dataShows[i].description;
    var showTickets = dataShows[i].tickets;
    var showDates = dataShows[i].dates;

    shows = shows + "<div class=\"row\">\
<div class=\"col-md-5\">\
<img src=\"" + showImage + "\" class=\"img-responsive\">\
</div>\
<div class=\"col-md-7\">\
<p>" + showDesc + "</p >\
<p><a href = \"" + showTickets + "\" target=\"_blank\" class=\"btn btn-lg btn-custom\" role=\"button\"> Tickets</a></p>\
</div></div ><hr/>";

}
showPage.innerHTML = shows;
