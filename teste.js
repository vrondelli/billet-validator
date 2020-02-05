const typeableLine = '00190000090283209300523584089173181450000005411';
const string = '00190.00009 02832.093005 23584.089173 1 81450000005411';

console.log(typeableLine.length);

const fields = [];

fields.push(typeableLine.slice(0, 10));
fields.push(typeableLine.slice(10, 21));
fields.push(typeableLine.slice(21, 32));
fields.push(typeableLine.slice(32, 33));
fields.push(typeableLine.slice(33));

console.log(typeableLine);
console.log(fields);

const fields2 = string.split(' ').map(field => {
  return field.replace(new RegExp(/\./), '');
});

console.log(fields2);

const array = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

const hue = (start, end) => {
  const startarray = array.filter(e => e >= start);

  if (end) {
    return startarray.filter(el => el <= end);
  }
  return startarray;
};

console.log(hue(5, 10));
console.log(hue(18));
console.log(hue(5, 5));
