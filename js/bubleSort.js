$(document).ready(function () {
    // FETCHING DATA FROM JSON FILE

    var dados = {};
    $.getJSON('../JSON/csvjson.json', function (json) {
        dados = json;

        var inicio = new Date().getTime();

        bubbleSort(json);

        var fim = new Date().getTime();
        var tempo = fim - inicio;
        convertido = new String(tempo);

        montarTabela();
        alert("Tempo para BubleSort ≅  " + convertido + " ms");

    });
    
    var montarTabela = function() {
        var student = '';
        $.each(dados, function (key, value) {

            student += '<tr>';
                student += '<td>' + value.nome + '</td>';
    
                student += '<td>' + value.siape  + '</td>';
    
                student += '<td>' + value.cargo + '</td>';
    
                student += '<td>' + value.formacao + '</td>';
            
            student += '</tr>';
        });
        $('#table').append(student);
    }

    function bubbleSort(arrayBolha) {
        let n = arrayBolha.length;
        for (let i = 0; i < n - 1; i++){
            for (let j = 0; j < n - i - 1; j++){
                if (arrayBolha[j].nome > arrayBolha[j + 1].nome) {
                    // troca temp and vetor[i]
                    let temp = arrayBolha[j].nome;
                    arrayBolha[j].nome = arrayBolha[j + 1].nome;
                    arrayBolha[j + 1].nome = temp;
                  }
              }
        }
    }
    
});


