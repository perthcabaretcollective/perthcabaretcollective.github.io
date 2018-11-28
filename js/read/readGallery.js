var galleryFeed = document.getElementById("galleryFeed");
var galleryString = "<hr>";
var galleryCount;

for(galleryCount = 0; galleryCount< galleryID.length; galleryCount++){
    galleryString = galleryString + "<" + galleryID[galleryCount] + "\"<hr />";
}
galleryFeed.innerHTML = galleryString;
