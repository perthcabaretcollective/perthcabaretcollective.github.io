var reviewBox = document.getElementById("reviewBox");
var reviews = "";
var iii;
var j;

for(iii = 0; iii< reviewData.length; iii++){
  reviewDesc = reviewData[iii].description;
  reviewAuthor = reviewData[iii].author;
  reviewStars = reviewData[iii].stars;

  reviews = reviews + "<hr>" + "<i style=\"font-size:28px\">\"" + reviewDesc + "\"</i>" + "<br>" + "<p style=\"font-size:18px\">- " + reviewAuthor + " ";
  for(j = 0; j < reviewStars; j++){
    reviews = reviews + "&#9733";
  }
  reviews = reviews + "</p>";
}
reviewBox.innerHTML = reviews;
