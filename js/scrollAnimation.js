let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.5,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    }
  });
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll(".title");
targets.forEach((target) => {
  observer.observe(target);
});

let targets2 = document.querySelectorAll(".text");
targets2.forEach((target) => {
  observer.observe(target);
});

let targets3 = document.querySelectorAll(".dealer__form");
targets3.forEach((target) => {
  observer.observe(target);
});

let targets4 = document.querySelectorAll(".about");
targets4.forEach((target) => {
  observer.observe(target);
});
let targets5 = document.querySelectorAll(".become__btn");
targets5.forEach((target) => {
  observer.observe(target);
});

let targets6 = document.querySelectorAll(".formCatalog__form");
targets6.forEach((target) => {
  observer.observe(target);
});
