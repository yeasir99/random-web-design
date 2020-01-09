const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".mainnav");
  const navitem = nav.querySelectorAll(".navitem");
  burger.addEventListener("click", function () {
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

    const navLinks = document.querySelectorAll(".linkitem li");
    navLinks.forEach((item, index) => {
      item.addEventListener("mouseenter", function () {
        gsap.to(item, {
          scale: 1.3
        });
        item.addEventListener("mouseleave", function () {
          gsap.to(item, {
            scale: 1
          });
        });
      });
    });

  });
};

navSlide();

const headerAnimation = () => {
  const mainLogo = document.querySelector(".logo");
  gsap.from(mainLogo, {
    y: -100,
    ease: "elastic.out(1, 0.3)",
    delay: 1.5
  });
  const burger = document.querySelector(".burger");
  gsap.from(burger, {
    y: -100,
    ease: "elastic.out(1, 0.3)",
    delay: 1.5
  })
}

headerAnimation();

//mail validation

const mailAddress = document.querySelector("input[type=email]");