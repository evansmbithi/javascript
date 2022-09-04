// task3
// equation of a circle
// (x – h)^2 + (y – k)^2 = r^2
// where ( h, k ) is the center and r is the radius.

function solution1(A,B,X,Y){
    let count = 0;
    for(let i = 0; i < A.length; i++){
        let x = A[i];
        let y = B[i];
        let distance = Math.sqrt(Math.pow(x - X, 2) + Math.pow(y - Y, 2));
        if(distance <= 20){
            count++;
        }
    }
    return count;
}

function solution(A,B,X,Y){
    let rad = 0;
    let icon_counter = -1;
    for(let i=0; i<A.length; i++){
        rad = Math.sqrt((A[i] - X)**2 + (B[i] - Y)**2);
        if(rad <= 20){
            icon_counter = i;
            return icon_counter;
        }
    }
}

const A = [100,200,100];
const B = [50,100,100];
const X = 200, Y = 60;

console.log(solution(A,B,X,Y))


// task2
// function soultion(A){
//     let sum = 0;
//     for(let i = 0; i < A.length; i++){
//         if(A[i] % 4 === 0){
//             sum += A[i];
//         }
//     }
//     return sum;
// }

// const list = [-6, -91, 1011, -100, 84, -22, 0, 1, 473]
// console.log(soultion(list))

// q = 9

// if(q>9 && q<100){
//     console.log("true")
// }