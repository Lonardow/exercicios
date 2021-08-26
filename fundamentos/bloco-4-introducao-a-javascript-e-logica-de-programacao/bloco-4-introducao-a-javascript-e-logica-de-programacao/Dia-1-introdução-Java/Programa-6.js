let peça = "TORRE".toLowerCase()

switch(peça){
    case "peao":
        console.log("No primeiro lance de cada peão ele pode avançar 1 ou 2 casas. À partir do segundo lance de cada peão ele irá movimenta-se apenas 1 casa.");
        break;

    case "bispo":
        console.log("No primeiro lance de cada peão ele pode avançar 1 ou 2 casas. À partir do segundo lance de cada peão ele irá movimenta-se apenas 1 casa.");
        break;
    case "torre":
        console.log("A torre se movimenta para frente e para trás, para a direita e para a esquerda, quantas casas quiser, mas não pode pular nenhuma outra peça.")
        break;
    case "cavalo":
        console.log("O cavalo tem um movimento especial que parece a letra L. O cavalo se movimenta 2 casas para frente ou para trás e em seguida 1 casa para a direita ou para a esquerda, ou 2 casas para a direita ou para a esquerda e em seguida 1 casa para frente ou para trás. O cavalo é a única peça do xadrez que pode pular outras peças.");
        break;
    case "rainha":
        console.log("A Rainha, também conhecida como Dama, é a peça mais poderosa do xadrez, ela pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça.");
        break;
    case "rei":
        console.log("O Rei movimenta-se apenas 1 casa em qualquer direção.");

    default:
        console.log("Erro")
}