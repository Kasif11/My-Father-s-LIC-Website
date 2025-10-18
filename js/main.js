// Basic JS for mailto form and small interactions
document.addEventListener('DOMContentLoaded', function(){
    // Handle lead form to open mail client with prefilled subject/body
    var form = document.getElementById('leadForm');
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var name = encodeURIComponent(document.getElementById('name').value || '');
        var phone = encodeURIComponent(document.getElementById('phone').value || '');
        var city = encodeURIComponent(document.getElementById('city').value || '');
        var plan = encodeURIComponent(document.getElementById('plan').value || '');
        var message = encodeURIComponent(document.getElementById('message').value || '');
        var subject = encodeURIComponent('LIC Enquiry from Website - ' + name);
        var body = 'Name: ' + name + '%0D%0A' + 'Phone: ' + phone + '%0D%0A' + 'City: ' + city + '%0D%0A' + 'Interested In: ' + plan + '%0D%0A%0D%0A' + 'Message:%0D%0A' + message;
        // Mailto
        var mail = 'mailto:mihussain21121969@gmail.com?subject=' + subject + '&body=' + body;
        window.location.href = mail;
      });
    }

        // Using Arrow Function
changeIcon = (icon) => icon.classList.toggle('fa-xmark');

// Navbar
function toggleMenu(){
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');   
}
document.getElementById('menu-icon').addEventListener('click',toggleMenu);
  
    // Smooth scroll for anchor links (simple)
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        var target = document.querySelector(this.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth'});
        }
      });
    });
  });