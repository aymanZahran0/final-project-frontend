$(document).ready(function (){
    $('#loading .spinner').fadeOut(500 , function (){
        $('#loading').fadeOut(1000 , function(){
            $('#loading').remove();
            $('body').css('overflow' , 'auto');
        })
    })

})
