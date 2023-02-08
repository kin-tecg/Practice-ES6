//*  use arrow function as it is cleaner

const square = function (number) {
    return number * number;
};
const circle = (number) => number * number;

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) {
    return job.isActive;
});
const arrowActiveJobs = jobs.filter((job) => job.isActive);

console.log(activeJobs);
console.log(arrowActiveJobs);
