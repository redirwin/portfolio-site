import { cards } from "./project-cards.js";

let cardsContainer = document.querySelector(".all-cards-container");

function createCardDisplay(cardArray) {
  let display = "";
  cardArray.forEach((card, index) => {
    display += `
    <div class="single-card-container ${card.classes}" id="${card.id}">
      <h3 class="card-heading">${card.name}</h3>
      <div class="card-about-wrapper">
        <p>${card.about}</p>
        <p>${card.uses}</p>
      </div>
      
      <div class="github-directions hide">
        <p>Click or tap to learn more and view project repo on GitHub.</p>
      </div>

      <div class="view-directions hide">
        <p>Click or tap to view the </br>live deployed project.</p>
      </div>



      <div class="card-btn-wrapper">
      <button class="card-btn about">
        <i class="fa-solid fa-question"></i>
      </button>

      <button class="card-btn github">
        <i class="fa-brands fa-github"></i>
      </button>
      <button class="card-btn live">
        <i class="fa-solid fa-eye"></i>
      </button>
    </div>
    </div>
  `;
  });
  return display;
}

let cardDisplay = createCardDisplay(cards);

cardsContainer.innerHTML = cardDisplay;

export { createCardDisplay };
