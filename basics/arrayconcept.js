let secondpumarks=[84,82,92,98,55,66,77]

// /* Hi sahana , your otp is sent to 973100000*/

// let b=secondpumarks.slice(1,5);
// console.log(b);
// console.log(secondpumarks.length); //4
// console.log(secondpumarks[0]) // 84
// secondpumarks.push(62) 
// secondpumarks.push(75)
// console.log(secondpumarks) //  84,82,92,98,62
// console.log(secondpumarks.length) // 6
// secondpumarks.pop();
// secondpumarks.pop();
// console.log(secondpumarks) // orginal

/* you are eligible for medical if sum is 390*/
/* you are eligible for engineering if sum is 320*/
 let sum=0;
 for(let i=0;i<secondpumarks.length;i++){
    console.log(i);
sum+=secondpumarks[i]; //sum=sum+secondpumarks[i]
//     sum=sum+secondpumarks[i]
 }
 console.log(sum/4);
 console.log("Sandeep got total of this much in 2nd pu"+sum);
 console.log(secondpumarks.includes(93));


