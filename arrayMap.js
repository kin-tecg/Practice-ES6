//arrowfunction and template literal

const colors = ["red", "green", "blue"];

const itemColors = colors.map((color) => `<li>${color}</li>`);

console.log(itemColors);
