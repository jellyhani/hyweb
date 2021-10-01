function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
    document.getElementById("ani").style.marginLeft = "160px";
    document.body.style.backgroundColor = "rgba(199,21,133,0.4)";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("ani").style.marginLeft = "0";
    document.body.style.backgroundColor = "pink";
}
/*
$('#MBTI').on('click', function () {
    $('#container').load('http://127.0.0.1:5500/index.html');
});
$('#Kakao').on('click', function () {
    $('#container').load('http://127.0.0.1:5500/kakao.html');
});
$('#HY').on('click', function () {
    $('#container').load('http://127.0.0.1:5500/hy.html');
});
$('#Album').on('click', function () {
    $('#container').load('http://127.0.0.1:5500/album.html');
});
*/
 $('#MBTI').on('click', function() {
   $('#span').load('https://hymbti.netlify.app/index.html');
 });
 $('#Kakao').on('click', function() {
   $('#span').load('https://hymbti.netlify.app/kakao.html');
 });
 $('#HY').on('click', function() {
   $('#span').load('https://hymbti.netlify.app/hy.html');
 });
 $('#Album').on('click', function() {
   $('#span').load('https://hymbti.netlify.app/album.html');
 });