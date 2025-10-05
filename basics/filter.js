let secondpumarks=[84,82,92,98,55,66,77]

var sum=0;
for(let i=0;i<secondpumarks.length;i++){
   console.log(i);
sum+=secondpumarks[i]; //sum=sum+secondpumarks[i]
//     sum=sum+secondpumarks[i]
}
console.log(sum);
//reduce,filter ,map
secondpumarks.reduce((sum,marks)=>sum+marks,0)
console.log("Sandeep got total of this much in 2nd pu"+sum);

console.log("filter even numbers using traditional way");
var scores=[12,13,14,16]
var evenscores=[]
for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
        evenscores.push(scores[i])
    }
    console.log(evenscores);
}   

console.log("filter odd numbers using filter method");
//filter
var oddscores=scores.filter(marks=>marks%2!=0)
console.log(oddscores);


//map
var newmarks=scores.map(marks=>marks+5)
console.log(newmarks);