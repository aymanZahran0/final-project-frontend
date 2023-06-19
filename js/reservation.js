// const cardContainer = document.getElementById("card-container");
// const cardTemplate = document.getElementById("card-template");

// const cardData = [
//   {
//     title: "Card 1",
//     content: "This is the content of Card 1",
//   },
//   {
//     title: "Card 2",
//     content: "This is the content of Card 2",
//   },
//   {
//     title: "Card 3",
//     content: "This is the content of Card 3",
//   },
// ];

// cardData.forEach((data) => {
//   const card = cardTemplate.content.cloneNode(true);
//   const cardTitle = card.querySelector(".card-title");
//   const cardContent = card.querySelector(".card-content");
//   const deleteButton = card.querySelector(".delete-button");

//   cardTitle.textContent = data.title;
//   cardContent.textContent = data.content;

//   deleteButton.addEventListener("click", () => {
//     card.remove();
//   });

//   cardContainer.appendChild(card);
// });