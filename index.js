const techBtn = document.querySelectorAll(".tech-btn");

techBtn.forEach((button) => {
  button.addEventListener("click", function handleClick(event) {
    const circle = button.childNodes;
    circle[1].classList.toggle("selected");
    circle[1].innerHTML === "+"
      ? (circle[1].innerHTML = "&#x2714;")
      : (circle[1].innerHTML = "+");
  });

  button.addEventListener("mouseenter", function handleClick(event) {
    button.classList.toggle("hover");
  });

  button.addEventListener("mouseleave", function handleClick(event) {
    button.classList.toggle("hover");
  });
});
