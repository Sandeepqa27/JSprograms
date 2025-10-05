let secondpumarks=[84,82,92,98,55,66,77]

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


