let nameInput1=document.getElementById('nameInput1');
let emailInput1=document.getElementById('emailInput1');
let passInput1=document.getElementById('passInput1');
let linkSignUp=document.getElementById('linkSignUp');
let linkSignIn=document.getElementById('linkSignIn');

let welcome = document.getElementById("welcome");
let element2 = document.getElementById("element2");
let element3 = document.getElementById("element3");
let emailInput2=document.getElementById('emailInput2');
let passInput2=document.getElementById('passInput2');

let signupButton = document.getElementById('signupButton');
let signUpForm = document.getElementById('signUpForm');
let loginButton = document.getElementById('loginButton');
let loginForm = document.getElementById('loginForm');
let homeForm = document.getElementById('homeForm');
let logoutButton = document.getElementById('logoutButton');
let signUpArray = [];


if (localStorage.getItem('users') != null) {
    signUpArray = JSON.parse(localStorage.getItem('users'));
    console.log(signUpArray);
}

// ___________________<<start signup>>___________________________

signupButton.addEventListener('click' , function showNone1(){

    var element1 = document.getElementById("element1");
    var empty = "";

    if(nameInput1.value == empty || emailInput1.value == empty || passInput1.value == empty){
    element1.classList.replace('d-none' , 'd-flex');
    document.getElementById('success').classList.add('d-none');
    document.getElementById('exists').classList.add('d-none');


     }

    else if(nameInput1.value !== empty && emailInput1.value !== empty && passInput1.value !== empty){
     singUp()
     element1.classList.replace( 'd-flex' , 'd-none');
     }

})

function singUp(){

    
    
    if(foundEmail()== false){
        document.getElementById('exists').classList.remove('d-none');
        document.getElementById('success').classList.add('d-none');
    }
    else {
        var signUpObject = {
            name: nameInput1.value,
            email: emailInput1.value,
            password: passInput1.value,
        }
        signUpArray.push(signUpObject);
        localStorage.setItem('users' , JSON.stringify(signUpArray));
        document.getElementById('success').classList.remove('d-none');
        document.getElementById('exists').classList.add('d-none');
    }
}

function foundEmail() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email == emailInput1.value) {
            return false
        }
    }
}
// _________________<<start login>>__________________________

loginButton.addEventListener('click' , function showNone2(){
    var empty = "";
   if(emailInput2.value == empty || passInput2.value == empty){
    element2.classList.replace('d-none' , 'd-flex');
    element3.classList.replace( 'd-flex' , 'd-none');
    }

   else if(emailInput2.value !== empty && passInput2.value !== empty){
    element2.classList.replace( 'd-flex' ,'d-none');
    signIn()

    }
}) 

function signIn(){
    if(isRegisteration() == true){
        loginForm.classList.add('d-none');
        homeForm.classList.remove('d-none');
        signUpForm.classList.add('d-none');
        }
    else {
        element3.classList.replace('d-none' , 'd-flex');  
    }
}

function isRegisteration() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email == emailInput2.value && signUpArray[i].email == passInput2.value) {
        document.getElementById('welcome').innerHTML = ` ${signUpArray[i].name}`;

            return true
        }
    }
}

// // ______________________start logout________________________________
// logoutButton.addEventListener('click' , function(){
//     // localStorage.removeItem('users')
//     loginForm.classList.remove('d-none');
//     homeForm.classList.add('d-none');
// })

// ____________________________________________________________________

linkSignUp.addEventListener('click' , function getNone3(){
    signUpForm.classList.remove('d-none');
    loginForm.classList.add('d-none');
})

linkSignIn.addEventListener('click' , function getNone4(){
    signUpForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
})




// login
$(document).ready(function() {
  $('#loginButton').click(function(e) {
    e.preventDefault();
    var email = $('#emailInput2').val();
    var password = $('#passInput2').val();
    $.ajax({
      url: 'http://127.0.0.1:8000/api/tourist/login',
      method: 'POST',
      data: { email: email, password: password },
      success: function(response) {
        // Handle successful login here
        
        localStorage.setItem("userInfo",response.user.stringify())
      },
      error: function(xhr, status, error) {
        console.log(error)
        $('#element3').removeClass('d-none').addClass('d-block');
      }
    });
  });
});




// sign up__________


$(document).ready(function() {
  $('#signupButton').click(function(e) {
    e.preventDefault();
    var firstName = $('#nameInput1').val();
    var lastName = $('#nameInput2').val();
    var gender = $('#genderSelect').val();
    var email = $('#emailInput1').val();
    var password = $('#passInput1').val();
    var ssn = $('#ssn1').val();
    var phone = $('#phone1').val();
    $.ajax({
      url: 'http://127.0.0.1:8000/api/tourist/register',
      method: 'POST',
      data: { 
        first_name: firstName, 
        last_name: lastName, 
        gender: gender,
        email: email, 
        password: password, 
        SSN: ssn, 
        phone: phone 
      },
      success: function(response) {
        // Handle successful signup here
        console.log(response)
        $('#success').removeClass('d-none').addClass('d-block');
      },
      error: function(xhr, status, error) {
        // Handle signup error here
        console.log(first)
        if (xhr.status == 409) {
          $('#exists').removeClass('d-none').addClass('d-block');
        } else {
          $('#element1').removeClass('d-none').addClass('d-block');
        }
      }
    });
  });
});

























// ..........................................
const container = document.querySelector('#dynamicDivsContainer');
const cont = document.querySelector('.cont');
cont.append( `
<h1> Ayman </h1>
`)
// // Make a request to the API
// fetch('http://example.com/api/data')
//   .then(response => response.json())
//   .then(data => {
//     // Loop through the data and create a new DIV for each item
//     data.forEach(item => {
//       // Create a new DIV element

//       // Set the content of the DIV element
//       cont.appendChild = `
//         <h1> Ayman </h1>
//       `;

//       // Add the new DIV element to the container
//       container.appendChild(newDiv);
//     });
//   })
//   .catch(error => {
//     console.error('Error retrieving data:', error);
//   });