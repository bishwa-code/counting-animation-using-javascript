let countingValues = document.querySelectorAll(".numbers");
let interval = 4000;

countingValues.forEach((countingValue) => {
  let startingValue = 0;
  let endingValue = parseInt(countingValue.getAttribute("data-counts"));
  let msCountingDuration = Math.floor(interval / endingValue);
  let strike = setInterval(() => {
    startingValue += 1;
    countingValue.innerHTML = startingValue;
    if (startingValue == endingValue) {
      clearInterval(strike);
    }
  }, msCountingDuration);
});
