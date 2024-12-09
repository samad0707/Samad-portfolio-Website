$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');  // Toggle the 'fa-times' class on #menu
    $('header').toggleClass('toggle');  // Toggle the 'toggle' class on header

    // Remove classes on scroll or load
    $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
    });
  });
});
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


AOS.init({
  duration: 1200, // Animation duration in milliseconds
  once: true      // Whether animation should happen only once
});




// $('.btn1').on('click', function () {
//   console.log('CV download initiated.');
// });
// document.querySelector('.button1').addEventListener('click', function() {
//   alert('Button clicked!');
// });


$('a[href="#"]').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top

  },
   500,
   'linear'
);

});

$(document).ready(function () {
  $('#button1').on('click', function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get input values
      const name = $('input[placeholder="Name"]').val().trim();
      const email = $('input[placeholder="Email"]').val().trim();
      const message = $('textarea[placeholder="Message"]').val().trim();

      // Check if all fields are filled
      if (name && email && message) {
          // Display SweetAlert success message
          Swal.fire({
              icon: 'success',
              title: 'Message Sent!',
              text: `Thank you, ${name}. We will get back to you shortly.`,
          });

          // Optional: Clear the form fields
          $('input[placeholder="Name"]').val('');
          $('input[placeholder="Email"]').val('');
          $('textarea[placeholder="Message"]').val('');
      } else {
          // Display SweetAlert error message
          Swal.fire({
              icon: 'error',
              title: 'Missing Fields',
              text: 'Please fill out all fields before submitting.',
          });
      }
  });
});

