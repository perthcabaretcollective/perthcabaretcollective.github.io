var galleryFeed = document.getElementById("galleryFeed");
var galleryString = "<div class=\"row\">";
var galleryCount;

for(galleryCount = 0; galleryCount< galleryID.length; galleryCount++){
    galleryString = galleryString + "<div class=\"gallery-product col-lg-4 col-md-4 col-sm-4 col-xs-6\"\
    <img src=\"images\/gallery\/" + galleryID[galleryCount] + "\" class=\"img-responsive\"><\/div>";
}
galleryString = galleryString + "<\/div>";
galleryFeed.innerHTML = galleryString;
