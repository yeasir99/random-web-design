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

    const navLinks = document.querySelectorAll(".linkitem li");
    navLinks.forEach((item, index) => {
      item.addEventListener("mouseenter", function() {
        gsap.to(item, {
          scale: 1.3,
          duration: 0.2
        });
        item.addEventListener("mouseleave", function() {
          gsap.to(item, {
            scale: 1,
            duration: 0.2
          });
        });
      });
    });
    const navsocal = document.querySelectorAll(".navsocal .socal-icon");
    navsocal.forEach((item, index) => {
      item.addEventListener("mouseenter", function() {
        gsap.to(item, {
          scale: 1.3,
          duration: 0.2
        });
        item.addEventListener("mouseleave", function() {
          gsap.to(item, {
            scale: 1,
            duration: 0.2
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
    delay: 1
  });
  const burger = document.querySelector(".burger");
  gsap.from(burger, {
    y: -100,
    ease: "elastic.out(1, 0.3)",
    delay: 1.5
  });
};

headerAnimation();

// form validation

const patterns = {
  name: /^[a-z ,.'-]+$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(filed, regex) {
  if (regex.test(filed.value)) {
    filed.className = "valid";
  } else filed.className = "invalid";
}

const inputName = document.querySelector("input[name=name]");
const inputEmail = document.querySelector("input[name=email]");
console.log(inputEmail);

inputName.addEventListener("keyup", function() {
  validate(inputName, patterns["name"]);
});
inputEmail.addEventListener("keyup", function() {
  validate(inputEmail, patterns["email"]);
});
