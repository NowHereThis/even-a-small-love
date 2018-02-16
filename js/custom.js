$(document).ready(function () {
    
    $("#meg").mouseenter(function() {       
        $(this).attr("src", "img/ocallahan01.png");
    });     

    $("#meg").mouseleave(function() {       
        $(this).attr("src", "img/ocallahan_placeholder.jpg");
    });

    $("#aya").mouseenter(function() {
        $(this).attr("src", "img/sato01.jpg");
    });

    $("#aya").mouseleave(function() {
        $(this).attr("src", "img/sato_placeholder.jpg");
    });

    $(".adda").mouseenter(function() {
        $("#adda1").attr("src", "img/lee03.jpg");
        $("#adda2").attr("src", "img/lee01.jpg");
        $("#adda3").attr("src", "img/lee02.jpg");
    });

    $(".adda").mouseleave(function() {
        $(".adda").attr("src", "img/lee_placeholder.jpg");
    });


    $(".ella").mouseenter(function() {
        $("#ella1").attr("src", "img/ordona01.jpg");
        $("#ella2").attr("src", "img/ordona02.jpg");
        $("#ella3").attr("src", "img/ordona03.jpg");
        $("#ella4").attr("src", "img/ordona04.jpg");
        $("#ella5").attr("src", "img/ordona05.jpg");
    });

    $(".ella").mouseleave(function() {
        $(".ella").attr("src", "img/ordona_placeholder.jpg");
    });
    
        
    var images = ["img/lee01.jpg", "img/lee02.jpg",
                  "img/lee03.jpg", "img/ocallahan01.png", 
                  "img/ordona01.jpg", "img/ordona02.jpg", 
                  "img/ordona03.jpg", "img/ordona04.jpg", 
                  "img/ordona05.jpg", "img/sato01.jpg"];
        
    $("#home").on("click", function() {
        event.preventDefault();
        newLocation = this.href;
        $("body").addClass("move-to-right-fade");
        $("body").fadeOut(1000, newpage);

    });

    $("#about").on("click", function() {
        event.preventDefault();
        newLocation = this.href;
        $("body").addClass("move-to-left-fade");
        $("body").fadeOut(1000, newpage);

    });

    function newpage() {
        window.location = newLocation;
    };
    
});

    


