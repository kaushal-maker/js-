const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // defauult submit startimng mea rokega form khulte hee

  const height = parseInt(document.querySelector('#height').value); //height ki vallue

  const weight = parseInt(document.querySelector('#weight').value); //weight ki value

  const resulte = document.querySelector('#results').value;

  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result

    results.innerHTML = `<span>${bmi}</span>`;
  }
});
