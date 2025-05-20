function calcularrendimento(){
    const valorrendimento= parseFloat (document.getElementById ("rendimento").value);
   if(!isNaN(valorrendimento))
   if(valorrendimento > 0 ){
    const despesasfixa =valorrendimento*(50/100);
    const despesasvariadas =valorrendimento* (30/100);
    const investimentos =valorrendimento* (20/100);
     
    document.getElementById ("resultadodespesasfixas") .innerText=despesasfixa;
    document.getElementById ("resultadodespesasvariaveis") .innerText=despesasvariadas;
    document.getElementById ("resultadoinvestimentos") .innerText= investimentos;

}else{
    alert ("é necessario informar um valor acima de 0!!!")

    }
    else{
        alert("caracteres não permitido")
    }
}