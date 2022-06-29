const toggleBtn = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
  // console.log(sidebar.classList);

  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});


const questions = document.querySelectorAll(".question-content");

questions.forEach(function (question) {
// console.log(question);
const btn = question.querySelector(".question-btn");
// console.log(btn);
btn.addEventListener("click", function () {

    questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
        question.classList.toggle("show-text");
});
});