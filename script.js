document.getElementById('generate').addEventListener('click', () => {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  
  if (isNaN(min) || isNaN(max) || min > max) {
    alert('Please enter valid numbers. Minimum should be less than or equal to Maximum.');
    return;
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('result').textContent = randomNum;
});
