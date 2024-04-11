$(document).ready(function(){

    $('#nova-tarefa').change(function(){
        const novaTarefa = $(this).val();
        $('ul').append('<li>' + novaTarefa + '<i class="fa-solid fa-check""></i> <i class="fa-solid fa-trash"></i> </li>');
        $(this).val('');
    });
    
    $('ul').on('click', '.fa-trash', function(){
        $(this).parent('li').fadeOut(200);
    });

    $('ul').on('click', '.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    });
});