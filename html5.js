// https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
document.addEventListener("DOMContentLoaded", function(event) {
    var menuIcon = document.querySelector("header nav i");

    menuIcon.onclick = function(){
        //alert("You click me");

    var x = document.querySelector("header nav");
        if (x.className === "") {
            x.className += " responsive";
        } else {
            x.className = "";
        }

    }
});


