document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carouselItem");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carouselButton"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
          <div class="carouselNav">
              ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".carouselButton");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carouselItemSelected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carouselButtonSelected")
      );

      items[i].classList.add("carouselItemSelected");
      button.classList.add("carouselButtonSelected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carouselItemSelected");
  buttons[0].classList.add("carouselButtonSelected");
});

function formPromt(){
  alert("Thank you. We will be in contact with you shortly.");
}