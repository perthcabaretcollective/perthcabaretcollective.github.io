var galleryFeed = document.getElementById("galleryFeed");
var galleryString = "";

galleryString = galleryString + "<div class=\"carousel-inner\">";

for (galleryCount = galleryID.length; galleryCount > 0; galleryCount--) {
    if (galleryCount == galleryID.length) {
        galleryString = galleryString + "<div class=\"item active carouselPic\"><img src=\"images\/gallery\/" + galleryID[galleryCount-1] + "\" class=\"img-responsive\" alt=\"piccy\">\
                          <\/div>";

    } else {
        galleryString = galleryString + "<div class=\"item carouselPic\"><img src=\"images\/gallery\/" + galleryID[galleryCount-1] + "\" class=\"img-responsive\" alt=\"piccy\">\
                          <\/div>";
    }
                 
}
galleryString = galleryString + "<\/div>";
galleryFeed.innerHTML = galleryString;
