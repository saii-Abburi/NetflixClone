const questions = document.getElementsByClassName("quest-header");
const answers = document.getElementsByClassName("quest-answer");
// Loop through all elements and add an event listener
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    for (let j = 0; j < answers.length; j++) {
      if(i!=j){
        answers[j].classList.remove("active");
      }
      else{
        continue;
      }
    };
    answers[i].classList.toggle("active");
  });
}
