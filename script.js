const target = new Date("2026-07-11T14:00:00+03:00");
function pad(n){return String(n).padStart(2,"0")}
function updateCountdown(){
  let diff = target - new Date();
  if(diff < 0) diff = 0;
  document.getElementById("days").textContent = Math.floor(diff/(1000*60*60*24));
  document.getElementById("hours").textContent = pad(Math.floor((diff/(1000*60*60))%24));
  document.getElementById("minutes").textContent = pad(Math.floor((diff/(1000*60))%60));
  document.getElementById("seconds").textContent = pad(Math.floor((diff/1000)%60));
}
updateCountdown(); setInterval(updateCountdown,1000);
function sendRSVP(event){
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const answer = document.getElementById("guestAnswer").value;
  document.getElementById("formResult").textContent = name + ", спасибо! Ваш ответ: " + answer + ".";
}
document.querySelectorAll(".gallery img").forEach(img=>img.addEventListener("click",()=>window.open(img.src,"_blank")));
