function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();

  let newformat = h >= 12 ? "PM" : "AM";
  m = checkTime(m);

  document.getElementById("time").innerHTML = `${h}:${m} ${newformat}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
