var galleryFeed = document.getElementById("galleryFeed");
var galleryString = "<ol class=\"carousel-indicators\">\
<li data-target=\"#galleryCarousel\" data-slide-to=\"0\" class=\"active\"><\/li>";
var galleryCount;
var galleryCountAscending = 1;

for (galleryCount = galleryID.length-1; galleryCount > 0; galleryCount--){
    galleryString = galleryString + "<li data-target=\"#galleryCarousel\" data-slide-to=\"" + galleryCountAscending + "\"><\/li>";
    galleryCountAscending++;
}
galleryString = galleryString + "<\/ol><div class=\"carousel-inner\">";

for (galleryCount = galleryID.length; galleryCount > 0; galleryCount--) {
    if (galleryCount == galleryID.length) {
        galleryString = galleryString + "<div class=\"item active\"><img src=\"images\/gallery\/" + galleryID[galleryCount-1] + "\" class=\"img-responsive\" alt=\"piccy\">\
                          <\/div>";

    } else {
        galleryString = galleryString + "<div class=\"item\"><img src=\"images\/gallery\/" + galleryID[galleryCount-1] + "\" class=\"img-responsive\" alt=\"piccy\">\
                          <\/div>";
    }
                 
}
galleryString = galleryString + "<\/div>";
galleryFeed.innerHTML = galleryString;
