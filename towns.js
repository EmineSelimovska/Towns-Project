$(document).ready(function () {
    $('#btnAdd').click(addTown);
    
});

function addTown() {
    let townName = $('#townNameForAdd').val();
    $('#townNameForAdd').val('');
    $('#towns').append($('<option>').text(townName));
    $('#result').text(townName + " added.");
}


function showMessage(msg) {
    $('#result').text(msg).css("display", "block");
    setTimeout(function () {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}