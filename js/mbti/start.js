var main = document.querySelector(".mbtiitem");
var qna = document.querySelector(".qna");
var endPoint = 12;
var result = document.querySelector(".result")
var select = [];

function calResult() {
    var pointArray = [
        { name: 'estj', value: 0, key: 0 },
        { name: 'estp', value: 0, key: 1 },
        { name: 'esfj', value: 0, key: 2 },
        { name: 'esfp', value: 0, key: 3 },
        { name: 'entj', value: 0, key: 4 },
        { name: 'entp', value: 0, key: 5 },
        { name: 'enfj', value: 0, key: 6 },
        { name: 'enfp', value: 0, key: 7 },
        { name: 'istj', value: 0, key: 8 },
        { name: 'istp', value: 0, key: 9 },
        { name: 'isfj', value: 0, key: 10 },
        { name: 'isfp', value: 0, key: 11 },
        { name: 'intj', value: 0, key: 12 },
        { name: 'intp', value: 0, key: 13 },
        { name: 'infj', value: 0, key: 14 },
        { name: 'infp', value: 0, key: 15 }
    ]
    for (let i = 0; i < endPoint; i++) {
        var target = qnaList[i].a[select[i]];
        for (let j = 0; j < target.type.length; j++) {
            for (let k = 0; k < pointArray.length; k++) {
                if (target.type[j] === pointArray[k].name) {
                    pointArray[k].value += 1;
                }
            }
        }
    }
    var resultArray = pointArray.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    });
    console.log(resultArray);
    let resultword = resultArray[0].key;
    return resultword;
}
function setResult() {
    let point = calResult();
    var resultName = document.querySelector('.resultname');
    resultName.innerHTML= infoList[point].name;
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
    calResult();
}

function addAnswer(answerText, qIdex, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    setTimeout(() => {
        answer.style.display = "flex";
        answer.innerHTML = answerText;
    }, 480)
    answer.addEventListener("click", function () {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].style.animation = "slideOut 0.5s";
            children[i].disabled = 'disabled';
            setTimeout(() => {
                select[qIdex] = idx;
                setTimeout(() => {
                    children[i].style.display = 'none';
                }, 240)
            }, 240)
        }
        goNext(++qIdex);
    }, false);

}
function goNext(qIdex) {
    if (qIdex === endPoint) {
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdex].q;
    for (let i in qnaList[qIdex].a) {
        addAnswer(qnaList[qIdex].a[i].answer, qIdex, i);
    }
    var statusBar = document.querySelector('.statusBar');
    statusBar.style.width = (100 / endPoint) * (qIdex + 1) + '%';
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
        let qIdex = 0;
        goNext(++qIdex);
    }, 240);
}