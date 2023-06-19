
// _____________________ this code is required for animation _______________________________
$(document).ready(function(){
  $(".veen .rgstr-btn button").click(function(){
      $('.veen .wrapper').addClass('move');
      $('.body').css('background','#19376D');
      $(".veen .login-btn button").removeClass('active');
      $(this).addClass('active');

  });
  $(".veen .login-btn button").click(function(){
      $('.veen .wrapper').removeClass('move');
      $('.body').css('background','#576CBC');
      $(".veen .rgstr-btn button").removeClass('active');
      $(this).addClass('active');
  });
});
// ____________________________________________________________






// // login
// $(document).ready(function() {
//   $('#loginButton').click(function(e) {
//     e.preventDefault();
//     var email = $('#emailInput2').val();
//     var password = $('#passInput2').val();
//     $.ajax({
//       url: 'http://127.0.0.1:8000/api/tourist/login',
//       method: 'POST',
//       data: { email: email, password: password },
//       success: function(response) {
//         // Handle successful login here
        
//         localStorage.setItem("userInfo",response.user.stringify())
//       },
//       error: function(xhr, status, error) {
//         console.log(error)
//         $('#element3').removeClass('d-none').addClass('d-block');
//       }
//     });
//   });
// });



// // sign up _____________________

// $(document).ready(function() {
//   $('#signupButton').click(function(e) {
//     e.preventDefault();
//     var firstName = $('#nameInput1').val();
//     var lastName = $('#nameInput2').val();
//     var gender = $('#genderSelect').val();
//     var email = $('#emailInput1').val();
//     var password = $('#passInput1').val();
//     var ssn = $('#ssn1').val();
//     var phone = $('#phone1').val();
//     $.ajax({
//       url: 'http://127.0.0.1:8000/api/tourist/register',
//       method: 'POST',
//       data: { 
//         first_name: firstName, 
//         last_name: lastName, 
//         gender: gender,
//         email: email, 
//         password: password, 
//         SSN: ssn, 
//         phone: phone 
//       },
//       success: function(response) {
//         // Handle successful signup here
//         console.log(response)
//         $('#success').removeClass('d-none').addClass('d-block');
//       },
//       error: function(xhr, status, error) {
//         // Handle signup error here
//         console.log(error)
//         if (xhr.status == 409) {
//           $('#exists').removeClass('d-none').addClass('d-block');
//         } else {
//           $('#element1').removeClass('d-none').addClass('d-block');
//         }
//       }
//     });
//   });
// });













// // ..........................................
// const container = document.querySelector('#dynamicDivsContainer');
// const cont = document.querySelector('.cont');
// cont.append( `
// <h1> Ayman </h1>
// `)
// // // Make a request to the API
// // fetch('http://example.com/api/data')
// //   .then(response => response.json())
// //   .then(data => {
// //     // Loop through the data and create a new DIV for each item
// //     data.forEach(item => {
// //       // Create a new DIV element

// //       // Set the content of the DIV element
// //       cont.appendChild = `
// //         <h1> Ayman </h1>
// //       `;

// //       // Add the new DIV element to the container
// //       container.appendChild(newDiv);
// //     });
// //   })
// //   .catch(error => {
// //     console.error('Error retrieving data:', error);
// //   });