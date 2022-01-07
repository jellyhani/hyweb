function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// $('#MBTI').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/index.html #container');
//     setTimeout(() => {
//         $.getScript('js/mbti/start.js');
        
//     }, 1000);
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
// $('#Css').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/csstest.html');
// });
// $('#Js').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/jstest.html');
// });
// $('#Notice').on('click', function () {
//     $('#container').load('http://127.0.0.1:5500/notice.html');
// });

$('#MBTI').on('click', function () {
    $('#container').load('https://hymbti.netlify.app/index.html #container');
    setTimeout(() => {
        $.getScript('js/mbti/start.js');
        
    }, 1000);
});
$('#Kakao').on('click', function () {
    $('#container').load('https://hymbti.netlify.app/kakao.html');
});
$('#HY').on('click', function () {
    $('#container').load('https://hymbti.netlify.app/hy.html');
});
$('#Album').on('click', function () {
    $('#container').load('https://hymbti.netlify.app/album.html');
});
$('#Css').on('click', function () {
    $('#container').load('https://hymbti.netlify.app/csstest.html');
});
$('#Js').on('click', function () {
    $('#container').load('https://hymbti.netlify.app/jstest.html');
});
$('#Notice').on('click', function () {
    $('#container').load('https://hymbti.netlify.app/notice.html');
});
$('#할아버지').on('click', function () {
	$('#container').load('https://hymbti.netlify.app/ljt.html');
});

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