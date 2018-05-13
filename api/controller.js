var primality = require('primality')

exports.isPrime = (req, res) => {
  var number = req.query.number;
  if (!number) {
    throw new Error('Invalid parameter: number');
  }
  var cast = Number(number);
  res.json({
    isPrime: primality(cast)
  });
}

exports.sum = (req, res) => {
  var numbers = req.query.numbers;
  if (!numbers) {
    throw new Error('Invalid parameter: numbers');
  }
  var cast = numbers.split(',').map(Number);
  var sum = cast.reduce((a, b) => { return a + b });
  res.json({
    result: sum,
    isPrime: primality(sum)
  });
}
