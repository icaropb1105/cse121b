const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


for (let i of studentReport) {
    if (i < 30){
        console.log (i);
    }
}

let j = 0;
while (studentReport[j] < LIMIT){

    console.log(studentReport[j]);
    j ++;
}

for (k in studentReport) {
    if (studentReport[k] < 30) {
        console.log (studentReport[k]);
    }
}