const questions = document.querySelectorAll(".questions .question");
const features = document.querySelectorAll(".features__options ul li");
const featuresDivs = document.querySelectorAll(".features__feature .feature");
const featureOne = document.getElementById("feature-1");
const featureTwo = document.getElementById("feature-2");
const featureThree = document.getElementById("feature-3");

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

features.forEach((feature) => {
  feature.addEventListener("click", (e) => {
    features.forEach((element) => {
      element.classList.remove("active");
    });

    e.currentTarget.classList.toggle("active");

    featuresDivs.forEach((element) => {
      element.classList.remove("active");
    });

    if (e.currentTarget.id === "1") {
      featureOne.classList.add("active");
    } else if (e.currentTarget.id === "2") {
      featureTwo.classList.add("active");
    } else if (e.currentTarget.id === "3") {
      featureThree.classList.add("active");
    }

    // question.querySelector("svg").classList.toggle("active");
    // const answer = question.querySelector(".answer");
    // e.currentTarget.classList.toggle("active");
    // const realHeight = answer.scrollHeight;
    // // const answer = question.querySelector(".answer");
    // // const realHeight = answer.scrollHeight;

    // if (!answer.style.maxHeight) {
    //   answer.style.maxHeight = realHeight + 40 + "px";
    //   answer.style.padding = "10px 0 30px 0";
    // } else {
    //   answer.style.maxHeight = null;
    //   answer.style.padding = null;
    // }
  });
});
