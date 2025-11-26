const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which language is primarily used for web pages to add interactivity?", answer: "javascript" },
  { question: "How many days are there in a leap year?", answer: "366" },
  { question: "What is the chemical symbol for water?", answer: "h2o" },
  { question: "Who wrote 'Romeo and Juliet'? (last name)", answer: "shakespeare" },
  { question: "What planet is known as the Red Planet?", answer: "mars" },
  { question: "What gas do plants absorb from the atmosphere?", answer: "carbon dioxide" },
  { question: "What is the largest mammal in the world?", answer: "blue whale" },
  { question: "How many continents are there on Earth?", answer: "7" },
  { question: "What is the fastest land animal?", answer: "cheetah" }
];

function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  alert(
    "Welcome to the console quiz!\nYou will be asked " + total + " questions.\nAnswers are not case-sensitive."
  );

  console.log("Starting quiz with " + total + " questions.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const qObj = quizQuestions[i];
    const promptText = `Question ${i + 1} of ${total}:\n${qObj.question}`;

    let userInput = prompt(promptText);
    if (userInput === null) userInput = "";

    const normalized = userInput.toLowerCase().trim();
    const correct = String(qObj.answer).toLowerCase().trim();

    if (normalized === correct) {
      score++;
      alert("Correct! ✅");
      console.log(`Q${i + 1}: correct (answer: "${qObj.answer}")`);
    } 
    else {
      alert(`Wrong ❌ — correct answer: "${qObj.answer}"`);
      console.log(
        `Q${i + 1}: wrong (you: "${userInput}", answer: "${qObj.answer}")`
      );
    }
  }

  const percent = Math.round((score / total) * 100);
  alert(`Quiz complete!\nYour score: ${score} / ${total} (${percent}%)`);
  console.log(`Final score: ${score}/${total} (${percent}%)`);
}

runQuiz();
