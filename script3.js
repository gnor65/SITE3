$(function(){
    
'use strict';
//header hight
    var myheader=$('.header');
  myheader.height($(window).height());
      
    $(window).resize(function(){
  
myheader.height($(window).height());
        
    });    
//links add activ class
         $('.links li a').hover(function(){
  
$(this).parent().addClass('activ').siblings().removeClass('activ');
    });   

    
    //make bxslider item center//
    $('.slider li').each(function(){
   $(this).css('paddingTop',($(window).height()- $('.slider li' ).height())/2);
     
     });
    
 $('.slider').bxSlider({
     pager:false
     
     });
    
    //smooth scrol to div//
     $('.links li a').click(function(){
   $('html,body').animate({
       scrollTop:$('#'+$(this).data('value')).offset().top
   
   
   },2000);
     
     });
 //our auto slidr//
     (function autoslider(){

   $('.slider2 .activ').each(function(){
        if(!$(this).is(':last-child')){
       
             $(this).delay(3000).fadeOut(1500,function(){
           
            $(this).removeClass('activ').next().addClass('activ').fadeIn(1500);
           
              autoslider() ;
                  });
           }else{
               $(this).delay(3000).fadeOut(1500,function(){
                    $(this).removeClass('activ');
                    $('.slider2 div').eq(0).addClass('activ').fadeIn(1500);
                   autoslider() ;
                      });
                        }
               
                
        });
   }());
    //trigger mixtup
    $('#container').mixItUp();
     
 
    
});

