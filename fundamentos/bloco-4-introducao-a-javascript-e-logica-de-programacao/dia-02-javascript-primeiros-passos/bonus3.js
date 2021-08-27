numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = [];


for (index = 0; index < numbers.length-1; index += 1){
    
  newArr.push(numbers[index] * numbers[index+1]);
}
    if(index === numbers.length-1){
        newArr.push(numbers[index]*2);
    }

console.log(newArr); 