// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
}) 



function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "",
        To : '',
        From : "",
        
        Subject : "This is the subject",
        Body : "Name :" + document.getElementById('name').value +
               "Email :" + document.getElementById('email').value +
               "Subject :" + document.getElementById('subject').value +
                "Body :" + document.getElementById('comment').value 
    }).then(
      message => alert(message)
    );
}