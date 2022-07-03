$(document).ready(function () {

    var dados = {};
    $.getJSON('../JSON/csvjson.json', function (json) {
        dados = json;

        var inicio = new Date().getTime();

        qs(json);

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

    /*function quicksort(arrayQuick) {
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
      };*/
      
function qs(vet){
    quickSort(vet, 0, vet.length - 1);
}

function quickSort(vet, ini, fim){
    var i = ini;
    var f = fim;
    var m = Math.floor((i + f)/2);

    while(i < f){
        while(vet[i].nome < vet[m].nome)
            i++;

        while(vet[f].nome > vet[m].nome)
            f--;

        if(i <= f){
            var temp = vet[i].nome;
            vet[i].nome = vet[f].nome;
            vet[f].nome = temp;
            i++;
            f--;
        }
    }

    if(f > ini)
        quickSort(vet, ini, f);

    if(i < fim)
        quickSort(vet, i, fim);
}
    
});


