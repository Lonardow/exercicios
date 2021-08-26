let salarioBruto = 3000
let salarioLiquido = 0
let inss = 0
let ir = 0


if (salarioBruto <= 1556,94){
    inss = (salarioBruto*8)/100;
} else if (salarioBruto >= 1556,95 && salarioBruto<=2594,92){
    inss = (salarioBruto*9)/100;
} else if (salarioBruto >=2594,93 && salarioBruto <=5189,8){
    inss = (salarioBruto*11)/100;
} else inss = 570,88;

    salarioLiquido = salarioBruto-inss;

if (salarioLiquido <= 1903,98){
    ir = 0;
} else if (salarioLiquido >=1903,99 && salarioLiquido <=2826,65){
    ir = ((salarioLiquido*7,5)/100)-142,80;
} else if (salarioLiquido >= 2826,66 && salarioLiquido <= 3751,05){
    ir = ((salarioLiquido*15)/100)-354,80;
} else if (salarioLiquido >= 3751,06 && salarioLiquido <=4664,68){
    ir = ((salarioLiquido*22,5)/100)-636,13;
} else if (salarioLiquido >=4664,68){
    ir = ((salarioLiquido*27,5)/100)-869,36;
}

    console.log(salarioLiquido-ir)
    