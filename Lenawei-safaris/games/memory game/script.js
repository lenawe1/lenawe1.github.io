const board = document.querySelector(".game-board");
const difficultySelect = document.getElementById("difficulty");

function startGame() {
    let difficulty = difficultySelect.value;
    let gridSize = difficulty === "easy" ? 4 : difficulty === "medium" ? 8 : 18;

    const emojiList = ["🐘", "🦁", "🦒", "🦓", "🐆", "🦏", "🐊", "🦌", "🐅"];
    let emojis = emojiList.slice(0, gridSize / 2).concat(emojiList.slice(0, gridSize / 2));
    emojis.sort(() => Math.random() - 0.5);

    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${Math.sqrt(gridSize)}, 1fr)`;

    emojis.forEach(emoji => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.emoji = emoji;
        card.textContent = emoji;
        card.style.color = "transparent";

        card.addEventListener("click", () => {
            card.style.color = "black";
        });

        board.appendChild(card);
    });
}
