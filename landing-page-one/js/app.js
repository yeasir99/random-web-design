const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mainnav');
    const navitem = nav.querySelectorAll('.navitem');
    burger.addEventListener('click', function () {
        nav.classList.toggle('open');
        gsap.from(navitem, {
            opacity: 0,
            x: 200,
            duration: 2,
            ease: "elastic.out(1, 0.3)"
        })
    })
}
navSlide();