const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".mainnav");
  const navitem = nav.querySelectorAll(".navitem");
  burger.addEventListener("click", function() {
    nav.classList.toggle("open");
    navitem.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: 200,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: index * 0.1
      });
    });
    burger.classList.toggle("bstyle");
  });
};
navSlide();

// const lineOne = burger.querySelector(".line1");
//     const lineTwo = burger.querySelector(".line");
//     const lineThree = burger.querySelector(".line3");
//     gsap.to(lineOne,{

//     })
//     gsap.to(lineTwo,{});
//     gsap.to(lineThree,{})
