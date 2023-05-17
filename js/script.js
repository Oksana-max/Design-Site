const btnAgree = document.querySelector(".formCatalog__btnAgree");
btnAgree.addEventListener("click", (e) => {
  e.preventDefault();
  btnAgree.classList.toggle("active");
});
