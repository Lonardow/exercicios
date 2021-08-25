const a = 15;
const b = 10;
const custoTotal = b*1000;

const imposto = ((custoTotal*20)/100)
const lucroLiquido = (a*1000)-imposto;

if (a < 0 || b < 0){
    console.log("ERRO")
}   else console.log(lucroLiquido);