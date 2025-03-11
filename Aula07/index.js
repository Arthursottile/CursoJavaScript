const decrease = document.getElementById('DecreaseButton');
const reset = document.getElementById('ResetButton');
const increase = document.getElementById('IncreaseButton');

const countLabel = document.getElementById('CountLabel');

let count = 0;

increase.onclick = function() {
  count++;
  countLabel.textContent = count;
}

decrease.onclick = function() {
    count--;
    countLabel.textContent = count;
  }

  reset.onclick = function() {
    count = 0;
    countLabel.textContent = count;
  }
