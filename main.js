// Beda dengan di file python, kali ini saya akan menjunjung readability

const tinggiSegitiga = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

tinggiSegitiga.question(`Masukkan tinggi segitiga siku-siku: `, (n) => {
  const reversedRange = [...Array(parseInt(n)).keys()].reverse(); // result: [n, n-1, n-2, ..., 0]

  reversedRange.forEach((i) => {
    const range = [...Array(parseInt(i + 2)).keys()];
    range.shift();
    const reversedRange = range.reverse(); // result: [i+2, i+1, i, ..., 1]

    console.log(reversedRange.join(" "));
  });
});
