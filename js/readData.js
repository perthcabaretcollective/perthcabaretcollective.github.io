console.log(data) // {"a" : "b", "c" : "d"}
var showPage = document.getElementById("showPage");
var shows = "<hr />";
var i;
for (i = 0; i < data.length; i++) {
    var showImage = data[i].image;
    var showDesc = data[i].description;
    var showTickets = data[i].tickets;
    shows = shows + "<div class=\"row\"><div class=\"col-md-8\"><img src=\"" + showImage + "\" class=\"img-responsive\"></div><div class=\"col-md-4\"><p>" + showDesc + "</p ><p><a href = \"" + showTickets + "\" target=\"_blank\" class=\"btn btn-custom\" role=\"button\"> Tickets</a></p></div></div ><hr/>";

}
showPage.innerHTML = shows;
