/*const hamburgerButton = document.getElementById('hamburger-button');
const leftMenuHidden = document.getElementById('left-menu-hidden');

hamburgerButton.addEventListener("click", function(e) {
    e.preventDefault();

    leftMenuHidden.classList.toggle('display-block');
});*/

$(document).ready(function(){
    $("#hamburger-button").click(function() {
        $("#left-menu-hidden").slideToggle("slow");
    })
})