const questions = {
    easy: [
        { question: "What animal is known as the king of the jungle?", answer: "Lion" },
        { question: "Which animal has a long trunk?", answer: "Elephant" }
    ],
    medium: [
        { question: "Which bird is flightless and found in Africa?", answer: "Ostrich" },
        { question: "What is the largest reptile?", answer: "Crocodile" }
    ],
    hard: [
        { question: "What is the fastest bird?", answer: "Peregrine Falcon" },
        { question: "Which snake is the longest in the world?", answer: "Reticulated Python" }
    ]
};

let level = "easy";
let score = 0;

function startQuiz() {
    document.getElementById("quiz-container").innerHTML = "";
    let quizQuestions = questions[level];

    quizQuestions.forEach(q => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${q.question}</p><input type="text" /><button>Check</button>`;
        document.getElementById("quiz-container").appendChild(div);

        div.querySelector("button").addEventListener("click", () => {
            let input = div.querySelector("input").value.toLowerCase();
            if (input === q.answer.toLowerCase()) {
                alert("Correct!");
                score++;
                document.getElementById("score").textContent = "Score: " + score;
            } else {
                alert("Try again!");
            }
        });
    });
}

document.getElementById("difficulty").addEventListener("change", (e) => {
    level = e.target.value;
    startQuiz();
});
