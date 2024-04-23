let countDownDays = new Date('May 1,2025 00:00:00').getTime();
let countDown = setInterval(()=>{
  let todayDate = new Date().getTime();
  let distance = countDownDays - todayDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let d = days < 10 ? '0' + days : days;
 let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;


  document.querySelector('.days').innerHTML = d; 
  document.querySelector('.hours').innerHTML = h; 
  document.querySelector('.minutes').innerHTML = m; 
  document.querySelector('.seconds').innerHTML = s;  


},1000)