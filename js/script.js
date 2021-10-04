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
$('#Css').on('click', function () {
    $('#container').load('http://127.0.0.1:5500/csstest.html');
});
$('#Js').on('click', function () {
    $('#container').load('http://127.0.0.1:5500/jstest.html');
});

// $('#MBTI').on('click', function () {
//     $('#container').load('https://hymbti.netlify.app/index.html');
// });
// $('#Kakao').on('click', function () {
//     $('#container').load('https://hymbti.netlify.app/kakao.html');
// });
// $('#HY').on('click', function () {
//     $('#container').load('https://hymbti.netlify.app/hy.html');
// });
// $('#Album').on('click', function () {
//     $('#container').load('https://hymbti.netlify.app/album.html');
// });
// $('#css').on('click', function () {
//     $('#container').load('https://hymbti.netlify.app/csstest.html');
// });
// $('#js').on('click', function () {
//     $('#container').load('https://hymbti.netlify.app/jstest.html');
// });


const mubtn = document.querySelector('.menu');
  let muopen = false;
  mubtn.addEventListener('click', () => {
    if(!muopen) {
      mubtn.classList.add('open');
      muopen = true;
      mubtn.onclick = openNav();
    } else {
      mubtn.classList.remove('open');
      muopen = false;
      mubtn.onclick = closeNav();
    }
  });