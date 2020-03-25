function regBilett() {
    const person = {
        antallBiletter : $("#antallBiletter").val(),
        valgtFilm : $("#valgtFilm").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val(),
    };
    $.post("/lagre", person, function(){
        hentAlle();
    });
    $("#antallBiletter").val("");
    $("#valgtFilm").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefonnr").val("");
    $("#epost").val("");
}

function hentAlle() {
    $.get( "/hentAlle", function( personer ) {
        formaterData(personer);
    });
}

function formaterData(personer) {
    let ut = "<table class='table table-striped'> + <tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefonnummer</th><th>Epost</th></tr>";


    for (const person of personer) {
        ut += "<tr><td>" + person.valgtFilm + "</td><td>" + person.antallBiletter + "</td><td>" + person.fornavn + "</td>" +
            "<td>" + person.etternavn + "</td><td>" + person.telefonnr + "</td><td>" + person.epost + "</td></tr>";
    }
    ut += "</table>";
    $("#personene").html(ut);
}

function slettAlle() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}