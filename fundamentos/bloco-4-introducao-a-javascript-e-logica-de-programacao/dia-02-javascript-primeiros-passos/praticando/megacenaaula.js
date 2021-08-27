let meuJogo = [41, 19, 15, 24, 30]

//numero sorteados
let firstNumber = Math.floor(Math.random() * 60) + 1;
let secondNumber = Math.floor(Math.random() * 60) + 1;
let thirdNumber = Math.floor(Math.random() * 60) + 1;
let fourthNumber = Math.floor(Math.random() * 60) + 1;
let fifthNumber = Math.floor(Math.random() * 60) + 1;
let sixthNumber = Math.floor(Math.random() * 60) + 1;

//armazena os numero sorteados
let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber]

//conferir o jogo
let numberOfHits = 0;

//numeros sorteados
for (let index = 0; index < megaSenaNumbers.length; index += 1){
    let drawnNumbers = (megaSenaNumbers[index]);

    for(let gameIndex = 0; gameIndex < meuJogo.length; gameIndex += 1){
        let lonardoGame = meuJogo[gameIndex];
        //console.log(drawnNumbers+" : "+lonardoGame);

        if(drawnNumbers === meuJogo){
            numberOfHits += 1;
        }
    }
}       
        console.log("jogo da mega: " + megaSenaNumbers);
        console.log("meu jogo: " + meuJogo);
        console.log("acertados: "+ numberOfHits);
