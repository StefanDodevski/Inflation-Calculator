let actionBtn = document.getElementById("action-btn");

function CalculateRate() {
  let rate = document.getElementById("rate");
  let money = document.getElementById("money");
  let years = document.getElementById("years");
  let result = document.getElementById("result");

  rate = parseFloat(rate.value);
  money = parseFloat(money.value);
  years = parseFloat(years.value);

  let worth = money + money * (rate / 100);
  for (i = 1; i < years; i++) {
    worth += worth * (rate / 100);
  }

  result.innerHTML = `<span>${money}&#8364 in ${years} years will worth ${worth.toFixed(
    2
  )}&#8364</span>`;
}

actionBtn.addEventListener("click", CalculateRate);
