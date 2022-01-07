
  let counter = document.querySelector('.counter');
  let today = new Date(), //현재 날짜 가져오기
      dday = new Date("Jan 5,2021, 00:00:00").getTime(), //디데이
      gap = today - dday,
      result = Math.floor(gap / (1000 * 60 * 60 * 24));

  counter.innerHTML = `할아버지 기일로부터 ${result} 일 째`
