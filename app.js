var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ------------------Menu icon----------------

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//--------------active link----------------

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href* =" + id + "]")
          .classList.add("active");
      });
    }
  });

  //------------------sticky navbar----------------

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // -------------remove toggle icon and navabr-------------------------

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
