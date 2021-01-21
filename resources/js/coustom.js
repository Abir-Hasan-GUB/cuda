$(document).ready(function(){

$('.js--service-section').waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
    }else{
        $("nav").removeClass("sticky");
    }
})
    // add mixitup on Portfolio section
    const mixer = mixitup('.portfolioContainer');

})

// Mobile Nav
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

// coustom scroll behaviour working here
$("a").on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().scrollTop
        }, 1000, function(){
            window.location.hash = hash;
        });
    }
});