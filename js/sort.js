$(document).ready(function () {
    // FETCHING DATA FROM JSON FILE

    var dados = {};
    $.getJSON('../JSON/csvjson.json', function (json) {
        dados = json;

        var inicio = new Date().getTime();

        /*json.sort(function(a, b) {
            return a - b;
        });*/
        json.sort(function (a, b) {
            return a.nome < b.nome ? -1 :
            (a.nome > b.nome ? 1 : 0);
            });

        var fim = new Date().getTime();
        var tempo = fim - inicio;
        console.log(json);
        console.log(tempo);

        convertido = new String(tempo);

        montarTabela();
        alert("Tempo para Sort ≅  " + convertido + " ms");

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
    
});


