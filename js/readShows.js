console.log(dataShows) // {"a" : "b", "c" : "d"}
var showPage = document.getElementById("showPage");
var pastShowPage = document.getElementById("pastShowPage");

var shows = "<br>";
var pastShows = "<br>";

/*TODO
 * var pastShowPage
 * sort by start date - split date into start date and end date
 *  var new show = html string
 *  if date past, add to past, if date future, add to future
 */
 dataShows.sort(function (a, b) { return a.startDate - b.startDate });
var now = new Date();
now.setHours(0, 0, 0, 0);

var i;
for (i = 0; i < dataShows.length; i++) {
    var showTitle = dataShows[i].title;
    var showVenue = dataShows[i].venue;
    var showVenueLink = dataShows[i].venueLink;
    var showImage = dataShows[i].image;
    var showDesc = dataShows[i].description;
    var showTickets = dataShows[i].tickets;
    var showStartDate = dataShows[i].startDate.toDateString();
    var showEndDate = dataShows[i].endDate.toDateString();

    var newShow = "<div class=\"row\">\
<div class=\"col-md-5\">\
<img src=\"" + showImage + "\" class=\"img-responsive\">\
</div>\
<div class=\"col-md-7\">\
        <h1>" + showTitle + "</h1>\
        <h3>" + showStartDate + " - " + showEndDate + "</h3>\
        <h4><a href=\"" + showVenueLink + "\">" + showVenue + "</a></h4 >\
        <br>\
        <button type=\"button\" class=\"btn btn-custom\" data-toggle=\"modal\" data-target=\"#" + i + "Modal\">More info</button>\
        <br><br>\
        <p><a href = \"" + showTickets + "\" target=\"_blank\" class=\"btn btn-custom\" role=\"button\"> Tickets</a></p>\
        <div class=\"modal fade\" id=\"" + i + "Modal\" role=\"dialog\">\
        <div class=\"modal-dialog\">\
            <div class=\"modal-content\">\
            <div class=\"modal-header\">\
                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\
                <h4 class=\"modal-title\">"+ showTitle +"</h4>\
            </div>\
          <div class=\"modal-body\">\
                <p>" + showDesc + "</p >\
<p><a href = \"" + showTickets + "\" target=\"_blank\" class=\"btn btn-custom\" role=\"button\"> Tickets</a></p>\
</div>\
    <div class=\"modal-footer\">\
                <button type=\"button\" class=\"btn btn-custom\" data-dismiss=\"modal\">Close</button>\
            </div>\
    </div >\
    </div >\
        </div>\
    </div>\
</div><hr/>";
    if (showEndDate < now) {
        pastShows = pastShows + newShow;
        console.log("show in the past");
    } else {
        shows = shows + newShow;
    }
}
showPage.innerHTML = shows;
pastShowPage.innerHTML = pastShows;

