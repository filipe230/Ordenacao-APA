$(document).ready(function () {

    var dados = {};
    $.getJSON('../JSON/csvjson.json', function (json) {
        dados = json;
        montarTabela();
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


