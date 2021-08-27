let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index = 0; index<numbers.length; index+=1){
    for(secondIndex = 0; secondIndex<index; secondIndex+=1){
        if(numbers[secondIndex]<numbers[index]){
            let troca = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = troca;
        }
    }
}

    console.log(numbers)