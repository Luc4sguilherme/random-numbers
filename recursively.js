function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumbers(quantity, min = 0, max = quantity) {
  const numbers = [];

  const range = min === 0 ? max - min + 1 : max - min;

  if (quantity > range) {
    throw new Error("Invalid quantity. The quantity must be less than the range between the minimum and maximum.");
  }

  function generate() {
    const number = getRandomInt(min, max);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }

    if (numbers.length !== quantity) {
      return generate(quantity, min, max);
    }

    return numbers;
  }

  return generate();
}
