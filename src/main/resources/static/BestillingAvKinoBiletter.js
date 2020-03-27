let personRegister = [];

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

// input-validering som sjekker om noe har blitt tastet i feltet
if (antallBiletter === "" || fornavn === "" || etternavn === "" || telefonnr === "" || epost === "" ){
    document.getElementById("feilAntallBiletter").innerHTML = "Ma skrive noe inn i antall!";
    document.getElementById("feilFornavn").innerHTML = "Ma skrive noe inn i fornavnet!";
    document.getElementById("feilEtternavn").innerHTML = "Ma skrive noe inn i etternavnet!";
    document.getElementById("feilTelefonnr").innerHTML = "Ma skrive noe inn i telefonnr!";
    document.getElementById("feilEpost").innerHTML = "Ma skrive noe inn i epost!";
    personRegister = [];
} else {
    document.getElementById("antallBilletter").innerHTML = "";
    document.getElementById("fornavn").innerHTML = "";
    document.getElementById("etternavn").innerHTML = "";
    document.getElementById("telefonnr").innerHTML = "";
    document.getElementById("epost").innerHTML = "";
}

document.getElementById("antallBilletter").value;
document.getElementById("valgtFilm").value = "";
document.getElementById("fornavn").value = "";
document.getElementById("etternavn").value = "";
document.getElementById("telefonnr").value = "";
document.getElementById("epost").value = "";