// Kahoot Workshop Starter Repo
const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();
client.join('07573082', Math.random() + "- @ayaangrover");
client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});
client.on("QuestionStart", question => {
  console.log("New question!");
  verifyProperty(question.answer, 'correct');
  console.log(`Answering Option ${correctAnswerIndex + 1}, the correct answer!`);
  question.answer(correctAnswerIndex);
});
function verifyProperty(array, property) {
  let finalNo
  array.forEach(function(value, i) {
    if (value[property] === true) { finalNo = i }
  });
  return (finalNo)
}
