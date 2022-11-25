console.log('----- LOOP 1 ------');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('----- LOOP 2 -------');
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

console.log('----- LOOP 3 -------');
for (let i = 100; i > 0; i--) {
  console.log(`Time until explosion: ${i} seconds. . .`);
}
console.log('💥 BOOM! 💥');
