$(document).ready(function(){
    $(".sania").ready(function(){
        $(".sania").animate({margin: '30% 0 0 50%'},4000);
        $(".sania").animate({opacity: '0'}, 500, function(){
          $(".sania-vodka").ready(function(){
          $(".sania-vodka").animate({opacity: '1'});
          $(".sania-vodka").animate({margin: '30% -10% 0'}, 4000);
        });
        });
    });
});
