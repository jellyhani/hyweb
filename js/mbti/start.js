const main = document.querySelector(".mbtiitem");
const qna = document.querySelector(".qna");


function addAnswer(answerText ,qIdex){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.style.display = "flex";
    answer.innerHTML = answerText;
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++) {
            
            children[i].style.animation = "slideOut 0.5s";
            setTimeout(() => {
                setTimeout(() => {
                    children[i].disabled = true;
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