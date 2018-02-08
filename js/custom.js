$(document).ready(function() {

    $('body').hide().fadeIn(3000);
    
    $('.link').click(function(event) {

        event.preventDefault();

        newLocation = this.href;

        $('body').fadeOut(1000, newpage);

    });



    function newpage() {

        $('body').load("about.html");

    }


});