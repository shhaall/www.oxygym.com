window.addEventListener('scroll',function(){
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle("sticky",window.scrollY > 50);
});

const togglebar = document.querySelector('.toggle');
const menu = document.querySelector('ol');

function navToggle(){
  togglebar.classList.toggle("active");
  menu.classList.toggle("active");
};




const scriptURL ='https://script.google.com/macros/s/AKfycbyiSHgiJMpt9_e8m8stSPT8pM3CYBDfjVgt3dIYtKFiNKGgFOOjvE10PH_Cygfh8tJd/exec'

const form =  document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(Response => alert("Thank you! your form is submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  


})
