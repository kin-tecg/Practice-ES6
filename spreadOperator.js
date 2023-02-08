//*combine array and objects together
const first = [1, 2, 3];
const second = [4, 5, 6];

const combine = [...first, "a", ...second];
console.log(combine);

const satu = {
    name: "mosh",
};
const dua = {
    job: "instructor",
};

const bareng = { ...satu, ...dua, location: "Japan" };
console.log(bareng);
