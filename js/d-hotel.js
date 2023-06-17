
// start rooms >>>
$(".option1").click(function(){
    $(".option1").removeClass("active0");
    $(".option2").addClass("active0");
    $(".option3").addClass("active0");
    $(".option4").addClass("active0");
    $(".option5").addClass("active0");
  });
  $(".option2").click(function(){
    $(".option2").removeClass("active0");
    $(".option1").addClass("active0");
    $(".option3").addClass("active0");
    $(".option4").addClass("active0");
    $(".option5").addClass("active0");
  });
  
  $(".option3").click(function(){
    $(".option3").removeClass("active0");
    $(".option1").addClass("active0");
    $(".option2").addClass("active0");
    $(".option4").addClass("active0");
    $(".option5").addClass("active0");
  });
  $(".option4").click(function(){
    $(".option4").removeClass("active0");
    $(".option1").addClass("active0");
    $(".option2").addClass("active0");
    $(".option3").addClass("active0");
    $(".option5").addClass("active0");
  });
  $(".option5").click(function(){
    $(".option5").removeClass("active0");
    $(".option1").addClass("active0");
    $(".option2").addClass("active0");
    $(".option3").addClass("active0");
    $(".option4").addClass("active0");
});
//  end rooms ____________________________________________

// start details  >>>
$('.onclk').click(function(){
$('.detls').animate({width:'80%'},500)
$('.detls').animate({height : '80vh'},500 , function(){
    $('.hd1').show(600, function(){

        $('.show1').slideDown(800,function(){
            $('.hd2').show(600, function(){
                $('.show2').slideDown(900)
            });
        })
    })
})
})
// end details ____________________________________________






// start location >>>

// $(document).ready(function(){
//   buildMap();
// });

// var sw = document.body.clientWidth,
//     bp = 550,
//     $map = $('.map');
// var static = "https://maps.google.com/maps/api/staticmap?center=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
// var embed = '<iframe width="980" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=pittsburgh,+pa&amp;aq=&amp;sll=38.003385,-79.420925&amp;sspn=5.54782,11.612549&amp;ie=UTF8&amp;hq=&amp;hnear=Pittsburgh,+Allegheny,+Pennsylvania&amp;t=m&amp;ll=40.440676,-79.995918&amp;spn=0.117583,0.336113&amp;z=12&amp;iwloc=A&amp;output=embed"></iframe>';

// function buildMap() {
//   if(sw>bp) { //If Large Screen
//       if($('.map-container').length < 1) { //If map doesn't already exist
//         buildEmbed();
//       }
//   } else {
//       if($('.static-img').length < 1) { //If static image doesn't exist
//         buildStatic();
//       }
//   }
// };


// function buildEmbed() { //Build iframe view
//     $('<div class="map-container"/>').html(embed).prependTo($map);
// };
  
// function buildStatic() { //Build static map
//    var mapLink = $('.map-link').attr('href'),
//        $img = $('<img class="static-img" />').attr('src',static);
//    $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
// }

// $(window).resize(function() {
//   sw = document.body.clientWidth;
//   buildMap();
//   google.maps.event.trigger(map, "resize");
// });
   
// end location _________________________________________

