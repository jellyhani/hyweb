var main = document.querySelector(".mbtiitem");
var qna = document.querySelector(".qna");
var endPoint = 12;

function addAnswer(answerText ,qIdex){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
        setTimeout(() => {
            answer.style.display = "flex";
            answer.innerHTML = answerText;
        }, 480)
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++) {
            children[i].style.animation = "slideOut 0.5s";
            children[i].disabled = 'disabled';
            setTimeout(() => {
                setTimeout(() => {
                    children[i].style.display = 'none';
                }, 240)
            }, 240)
        }
        goNext(++qIdex);
    }, false);
    
}
function goNext(qIdex){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdex].q;
    for(let i in qnaList[qIdex].a) {
        addAnswer(qnaList[qIdex].a[i].answer, qIdex);
    }
    var statusBar = document.querySelector('.statusBar');
    statusBar.style.width = (100/endPoint) * (qIdex+1) + '%';
}

function begin(){
    setTimeout(() => {
        main.style.animation = "slideOut 0.5s";
        setTimeout(() => {
            main.style.display = "none";
        }, 240)
    }, 240);
    setTimeout (() => {
        qna.style.animation = "slideIn 0.5s";
        setTimeout(() => {
            qna.style.display = "block";
            qna.style.margin = "20px auto";
        }, 240)
        let qIdex = 0;
        goNext(qIdex);
    }, 240);
}