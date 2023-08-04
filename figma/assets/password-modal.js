var passwordmodal = document.querySelector('.password__modal'); 
var passwordmodalopen = document.querySelector('.password__modal-open');
var closeBtn = document.querySelector('.modal__close-button'); 
passwordmodalopen.addEventListener('click', () => {
  passwordmodal.classList.add('open');
});
closeBtn.addEventListener('click', () => {
  passwordmodal.classList.remove('open');
});