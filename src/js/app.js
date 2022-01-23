const questions = document.querySelectorAll(".questions .question");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    questions.forEach((element) => {
      element.classList.remove("active");
      //   element.querySelector(".answer").style.maxHeight = null;
    });

    question.querySelector("svg").classList.toggle("active");
    const answer = question.querySelector(".answer");
    e.currentTarget.classList.toggle("active");
    const realHeight = answer.scrollHeight;
    // const answer = question.querySelector(".answer");
    // const realHeight = answer.scrollHeight;

    if (!answer.style.maxHeight) {
      answer.style.maxHeight = realHeight + 40 + "px";
      answer.style.padding = "10px 0 30px 0";
    } else {
      answer.style.maxHeight = null;
      answer.style.padding = null;
    }
  });
});
