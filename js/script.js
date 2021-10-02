function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
    document.getElementById("any").style.marginLeft = "160px";
    document.body.style.backgroundColor = "rgba(199,21,133,0.4)";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("any").style.marginLeft = "0";
    document.body.style.backgroundColor = "pink";
}

// $('#MBTI').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/index.html');
// });
// $('#Kakao').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/kakao.html');
// });
// $('#HY').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/hy.html');
// });
// $('#Album').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/album.html');
// });

 $('#MBTI').on('click', function() {
   $('#container').load('https://hymbti.netlify.app/index.html');
 });
 $('#Kakao').on('click', function() {
   $('#container').load('https://hymbti.netlify.app/kakao.html');
 });
 $('#HY').on('click', function() {
   $('#container').load('https://hymbti.netlify.app/hy.html');
 });
 $('#Album').on('click', function() {
   $('#container').load('https://hymbti.netlify.app/album.html');
 });
//  const p = document.getElementById("sentences");
// const origSentences = [
//   "This is the <br /> first sentence.",
//   "This is the second sentence.",
//   "This is the <br /> third sentence."
// ];
// let remainingSentences = [];
// function randomSentence() {
//   if (remainingSentences.length === 0)
//     remainingSentences = origSentences.slice();
//   const { length } = remainingSentences;
//   const [quote] = remainingSentences.splice(
//     Math.floor(Math.random() * length),
//     1
//   );
//   p.innerHTML = quote;
// }
