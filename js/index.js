let aboutOffset = $('#services').offset().top;

$(window).scroll(function(){
  let windowScroll = $(window).scrollTop(); 
  if(windowScroll > aboutOffset-150){
    $('#navbar').css('backgroundColor' , 'rgba(0, 0, 0, 0.9)');
    $('.arrow').css('display' , 'flex');
  }
  else{
    // $('#navbar').css('backgroundColor' , 'transparent');
    $('.arrow').css('display' , 'none');

  }
})

$(document).ready(function (){
    $('#loading .spinner').fadeOut(2000 , function (){
        $('#loading').fadeOut(1000 , function(){
            $('#loading').remove();
            $('body').css('overflow' , 'auto');
        })
    })

})





// _______________<contact> ____________________________

allItems=[]

let formm = document.querySelector('.form');
formm.addEventListener('submit' , e => {
    e.preventDefault();
    const payload = new FormData(formm);
    console.log([...payload]);
    fetch('http://127.0.0.1:8000/api/contact' , {
        method: 'POST',
        body: payload,
    })
    .then(res => res.json())
    .then(function(data1){
    
        if(data1.success==false){
          document.getElementById('msg').classList.remove('d-none');
          document.getElementById('success').classList.add('d-none');
          document.querySelector('.msg').innerHTML=`the input field is required `;
          console.log(data1.success)
        }

        else{
          document.getElementById('success').classList.remove('d-none');
          document.getElementById('msg').classList.add('d-none');
          document.querySelector('.success').innerHTML=data1.message;
          console.log(data1.success)
        }
        console.log(data1)
        
      //  let item1 =[data1.data]
      //  let item2 =[...item1]
        // console.log(item2)
    })
    // .catch(err => console.log(err));

});

