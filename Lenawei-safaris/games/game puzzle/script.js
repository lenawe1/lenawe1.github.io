const puzzleContainer = document.getElementById("puzzle-container");
const levels = { easy: 3, medium: 4, hard: 5 };
let gridSize = 3;

function startPuzzle() {
    let level = document.getElementById("difficulty").value;
    gridSize = levels[level];

    let pieces = Array.from({ length: gridSize * gridSize - 1 }, (_, i) => i + 1);
    pieces.push("");

    puzzleContainer.innerHTML = "";
    puzzleContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    pieces.forEach(piece => {
        const div = document.createElement("div");
        div.classList.add("puzzle-piece");
        div.textContent = piece;
        div.addEventListener("click", () => movePiece(piece));
        puzzleContainer.appendChild(div);
    });

    shufflePuzzle();
}

function shufflePuzzle() {
    let shuffled = pieces.sort(() => Math.random() - 0.5);
    renderPuzzle(shuffled);
}

function movePiece(piece) {
    let index = pieces.indexOf(piece);
    let emptyIndex = pieces.indexOf("");

    if ([index - 1, index + 1, index - gridSize, index + gridSize].includes(emptyIndex)) {
        pieces[emptyIndex] = piece;
        pieces[index] = "";
        renderPuzzle();
    }
}

startPuzzle();
