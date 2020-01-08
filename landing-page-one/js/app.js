const burger = document.querySelector('.burger');
const nav = document.querySelector('.mainnav');
const navitem = nav.querySelectorAll('.navitem');
burger.addEventListener('click', function () {
    nav.classList.toggle('open');
})