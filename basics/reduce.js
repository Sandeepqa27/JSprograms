let secondpumarks=[84,82,92,98,55,66,77]
//sum of all marks using traditional way
var sum=0;
for(let i=0;i<secondpumarks.length;i++){
   
sum+=secondpumarks[i]; //sum=sum+secondpumarks[i]
//     sum=sum+secondpumarks[i]
}
console.log("Sandeep got total of this much in 2nd pu using traditiona approach"+sum);
//sum of all marks using reduce method
secondpumarks.reduce((sum,marks)=>sum+marks,0)
console.log("Sandeep got total of this much in 2nd pu"+sum);