document.getElementById('formFolhaPagamento').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salario').value);

    let taxaDesconto;
    let valorDesconto;

    
    if (salario <= 1000) {
        taxaDesconto = 8;
    } else if (salario <= 1500) {
        taxaDesconto = 8.5;
    } else {
        taxaDesconto = 9;
    }

    valorDesconto = salario * (taxaDesconto / 100);

    
    document.getElementById('resultadoNome').textContent = nome;
    document.getElementById('resultadoSalario').textContent = salario.toFixed(2);
    document.getElementById('resultadoTaxaDesconto').textContent = taxaDesconto.toFixed(1);
    document.getElementById('resultadoDesconto').textContent = valorDesconto.toFixed(2);

    
    document.getElementById('resultado').classList.remove('hidden');
});