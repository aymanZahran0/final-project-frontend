
allItems=[]

let formm = document.querySelector('.form');
formm.addEventListener('submit' , e => {
    e.preventDefault();
    const payload = new FormData(formm);
    console.log([...payload]);
    fetch('http://127.0.0.1:8000/api/bookrestaurant' , {
        method: 'POST',
        body: payload,
    })
    .then(res => res.json())
    .then(function(data1){
    
        if(data1.success==false){
          document.getElementById('error_message').classList.remove('d-none');
          document.getElementById('sent_message').classList.add('d-none');
          document.querySelector('.error_message').innerHTML=`the input field is required`;
          console.log(data1.success)
        }

        else{
          document.getElementById('sent_message').classList.remove('d-none');
          document.getElementById('error_message').classList.add('d-none');
          document.querySelector('.sent_message').innerHTML=data1.message;
          console.log(data1.success)
        }
        
       
        console.log(data1)
    })
    // .catch(err => console.log(err));

});