var awardFeed = document.getElementById("awardFeed");
var awardString = "";
var awardCount;

for(awardCount = 0; awardCount< awardData.length; awardCount++){
    awardDesc = awardData[awardCount].desc;

    awardString = awardString + "<p>" + awardDesc + "</p>";
}
awardFeed.innerHTML = awardString;
