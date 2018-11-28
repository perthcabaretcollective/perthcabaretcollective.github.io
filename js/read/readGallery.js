var galleryFeed = document.getElementById("galleryFeed");
var galleryString = "<div class=\"container\">";
var galleryCount;

for(galleryCount = 0; galleryCount< galleryID.length; galleryCount++){
    galleryString = galleryString + "<div class=\"col-xs-4\"\
    <img src=\" images\/gallery\/" + galleryID[galleryCount] + ".jpg\"><\/div>";
}
galleryString = galleryString + "<\/div>";
galleryFeed.innerHTML = galleryString;
