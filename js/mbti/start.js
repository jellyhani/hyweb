var main = document.querySelector(".mbtiitem");
var qna = document.querySelector(".qna");
var result = document.querySelector(".result");

var endPoint = 12;
var select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  var resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
  setTimeout(() => {
    qna.style.animation = "slideOut 0.5s";
    setTimeout(() => {
      qna.style.display = "none";
    }, 240)
  }, 240);
  setTimeout(() => {
    result.style.animation = "slideIn 0.5s";
    setTimeout(() => {
      result.style.display = "block";
      result.style.margin = "20px auto";
    }, 240)
  }, 240);
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  a.appendChild(answer);
  setTimeout(() => {
    answer.style.display = "flex";
    answer.innerHTML = answerText;
  }, 220)
  answer.addEventListener("click", function () {
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = 'disabled';
      children[i].style.animation = "slideOut 0.5s";
      setTimeout(() => {
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = 'none';
        }
      }, 220);
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for (let i = 0; i < target.length; i++) {
        select[target[i]] += 1;
      }

      goNext(++qIdx);
    }, 0)
  }, false);
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var statusBar = document.querySelector('.statusBar');
  statusBar.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin() {
  setTimeout(() => {
    main.style.animation = "slideOut 0.5s";
    setTimeout(() => {
      main.style.display = "none";
    }, 240)
  }, 240);
  setTimeout(() => {
    qna.style.animation = "slideIn 0.5s";
    setTimeout(() => {
      qna.style.display = "block";
      qna.style.margin = "20px auto";
    }, 240)
    let qIdx = 0;
    goNext(qIdx);
  }, 240);
}
