numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = [];


for (index = 1; index < numbers.length-1; index += 1){
     for(let secondIndex = 0; secondIndex === numbers.length; secondIndex+= 1){
        newArr.push(numbers[index] * numbers[secondIndex]);
     }
     
  
}
    if(index === numbers.length-1){
        newArr.push(numbers[index]*2);
    }

console.log(newArr); 