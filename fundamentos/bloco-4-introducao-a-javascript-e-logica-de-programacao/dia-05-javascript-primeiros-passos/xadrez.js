//Posição original da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;


//Posição da peça oponente
let opponentRowPosition = 8;
let opponentColumnPosition = 2;

//Algum variável que armazene se é possivel o não ocorrer o ataque
let canAttack = false;

// Cálculo para entender se o ataque pode ser realizado

if(queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition){
    canAttack = true;
    console.log("pode atacar na mesma linha e coluna")
}





for (let upperRight = 1; upperRight < 8; upperRight += 1){
    let currentQueenRow = queenRowPosition + upperRight;
    let currentQueenColumn = queenColumnPosition + upperRight;

        //Se a posição da linha for maior que 8 ou a coluna for maior que 8 eu tenho que parar o loop
    if(currentQueenRow > 8 || currentQueenColumn > 8){
    break;
    }



    //se a linha atual da rainha E a coluna atual da rainha estiverem na mesma posiçao que peça oponente, significa que ela pode atacar!

    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canattack = true;
        console.log("pode atacar diagonal superior direita")
        break;
    }
}

    //diagonal inferior esquerda
for(let lowerLeft = 1; lowerLeft < 8; lowerLeft += 1){
    let currentQueenRow = queenRowPosition - lowerLeft;
    let currentQueenColumn = queenColumnPosition - lowerLeft;
    
    //Se a linha atual da rainha for igual a zero OU a coluna for igual for igual a zero eu paro o loop
    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('pode atacar na diagonal inferior esquerda');
        break;
    }

}
//diagonal superior esquerda
for(let upperLeft = 1; upperLeft < 8; upperLeft += 1){
    let currentQueenRow = queenRowPosition + upperLeft;
    let currentQueenColumn = queenColumnPosition - upperLeft;
//se a linha atual da rainha for igual a 9 ou a coluna for igual a 9 paro  o loop

    if(currentQueenRow >  8 || currentQueenColumn === 0 ){
        console.log("pode atacar na diagonal superior esquerda")
        canAttack = true;
        break;

    }
}

//diagonal inferior direita
// for(let lowerRight = 1; lowerRight < 8; lowerRight += 1){
//     let currentQueenRow = queenRowPosition - lowerRight;
//     let currentQueenColumn = queenColumnPosition + lowerRight;

//    if (currentQueenRow === 0 || currentQueenColumn > 8){
//        canAttack = true;
//        console.log("pode atacar na diagonal inferior direita")
//    break;

//  }
// }
    console.log(canAttack)