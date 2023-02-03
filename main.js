const clock = document.querySelector(".clock");

setInterval(() => {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}, 1000);
