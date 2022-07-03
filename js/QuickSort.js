$(document).ready(function () {

    var dados = {};
    $.getJSON('../JSON/csvjson.json', function (json) {
        dados = json;

        var inicio = new Date().getTime();

        quicksort(json);

        var fim = new Date().getTime();
        var tempo = fim - inicio;
        convertido = new String(tempo);

        montarTabela();
        alert("Tempo para QuickSort ≅  " + convertido + " ms");

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

    function quicksort(arrayQuick) {
        if (arrayQuick.length <= 1) {
          return arrayQuick;
        }
      
        var pivo = arrayQuick[0];
        
        var left = []; 
        var right = [];
      
        for (var i = 1; i < arrayQuick.length; i++) {
            arrayQuick[i].nome[i] < pivo.nome ? left.push(arrayQuick[i]) : right.push(arrayQuick[i]);
        }
      
        return quicksort(left).concat(pivo, quicksort(right));
      };
    
});


