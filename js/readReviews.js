var reviewBox = document.getElementById("reviewBox");
var reviews = "";
var iii;

for(iii = 0; iii< reviewData.length; iii++){
  reviewDesc = reviewData[iii].description;
  reviewAuthor = reviewData[iii].author;

  reviews = reviews + "\"" + reviewDesc + "\"" + "<br>" + "- " + reviewAuthor + "<hr>";
}
reviewBox.innerHTML = reviews;
