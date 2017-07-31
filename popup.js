// document.addEventListener('DOMContentLoaded', function() {
// var link = document.getElementById("checkPage");
// link.addEventListener("click", function(){
//   		var index_url = "https://www.google.com/maps";
//        		chrome.tabs.create({
//        		url: index_url

//     });
// }, false);
// }, false);


chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerHTML = selection[0];
});
