const accordionButtons = document.querySelectorAll(".accordion__button");

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", (event) => {
    console.log(event.target);
    const target = event.target;
    const accordionBody = target.parentElement.nextElementSibling;

    target.classList.toggle("accordion__button--collapsed")
    accordionBody.classList.toggle("accordion__body--show");
  });
});
