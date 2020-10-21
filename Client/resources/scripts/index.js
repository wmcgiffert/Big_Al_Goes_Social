//Array of Tweets
var tweets = ["Hey there from Big AL","Hey again","It's still me"];

//Function with while loop that makes our tweets into html to be displayed"
setGreets = function(){
    var html = "<ul>";
    tweets.forEach((tweet)=>{
        html += "<li><div class=\"avatar\"></div><span>" + tweet + "</span></li>";
    })
    html += "</ul>";

    document.getElementById("greets").innerHTML = html;
}
