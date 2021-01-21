'use strict';

const modal = document.querySelector('.modal');
const btnShowModal = document.querySelectorAll('.show-modal'); //cons of querySelector that it only shows first elemnt if more than one elemnet have same class
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
console.log(btnShowModal);

const showModal = function () {
  //console.log('Button clicked!');
  modal.classList.remove('hidden'); //here we don't use . to access class
  overlay.classList.remove('hidden'); //here we don't use . to access class
};

for (let i = 0; i < btnShowModal.length; i++)
  console.log(btnShowModal[i].addEventListener('click', showModal));

const closeModal = function () {
  modal.classList.add('hidden'); //here we don't use . to access class
  overlay.classList.add('hidden'); //here we don't use . to access class
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//as soon as event occurds js will create en=vent object where it will store all info about events
document.addEventListener('keydown', function (e) {
  //listening for ebent through the entire document 3 type of keypress event keydown,keyup,keypress
  //console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    //console.log('Eacape was presssed');
    closeModal();
});
//hey js call this fun as soon as event occur and pass eb=vent obj as argument to function
