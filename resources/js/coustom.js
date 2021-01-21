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