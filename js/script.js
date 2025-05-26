
function calcular() {
    const valor = parseFloat(document.getElementById('rendimento').value) || 0;
  
    const fixas = valor * 0.5;
    const variaveis = valor * 0.3;
    const investimentos = valor * 0.2;
  document.getElementById('box').style.display="block";
    document.getElementById('fixas').innerText = `R$ ${fixas.toFixed(2)}`;
    document.getElementById('variaveis').innerText = `R$ ${variaveis.toFixed(2)}`;
    document.getElementById('investimentos').innerText = `R$ ${investimentos.toFixed(2)}`;
  }