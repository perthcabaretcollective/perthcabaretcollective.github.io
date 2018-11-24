var youtubeFeed = document.getElementById("youtubeFeed");
var youtubeString = "<hr>";
var iiii;

for(iiii = 0; iiii< youtubeID.length; iiii++){
  console.log(youtubeID[iiii]);
    youtubeString = youtubeString + "<iframe src=\"https:\/\/www.youtube.com\/embed\/" + youtubeID[iiii] + "\"width=\"560\" height=\"315\" frameborder=\"0\" allowfullscreen><\/iframe>\<hr />";
}
youtubeFeed.innerHTML = youtubeString;
