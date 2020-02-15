let personRegister = [];


function billettKjopt(){
    const antallBilletter = document.getElementById("antallBilletter").value;
    const valgtFilm = document.getElementById("valgtFilm").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const person = {
        antallBilletter: antallBilletter,
        valgtFilm: valgtFilm,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost,
    };

    personRegister.push(person);
    console.log(personRegister);

    //Sjekker om noe har blitt input i feltet og returnerer feil melding eller ei
        if (antallBilletter === "" || fornavn === "" || etternavn === "" || telefonnr === "" || epost === "" ){
            document.getElementById("feilAntallBiletter").innerHTML = "Ma skrive noe inn i antall!";
            document.getElementById("feilFornavn").innerHTML = "Ma skrive noe inn i fornavnet!";
            document.getElementById("feilEtternavn").innerHTML = "Ma skrive noe inn i etternavnet!";
            document.getElementById("feilTelefonnr").innerHTML = "Ma skrive noe inn i telefonnr!!";
            document.getElementById("feilEpost").innerHTML = "Ma skrive noe inn i epost!";
    } else {
            document.getElementById("feilAntallBiletter").innerHTML = "";
            document.getElementById("feilFornavn").innerHTML = "";
            document.getElementById("feilEtternavn").innerHTML = "";
            document.getElementById("feilTelefonnr").innerHTML = "";
            document.getElementById("feilEpost").innerHTML = "";
        }

    document.getElementById("antallBilletter").value;
    document.getElementById("valgtFilm").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";

    for (let p of personRegister){
        console.log(personRegister);
        ut+="<tr>";
        ut+="<td>"+p.valgtFilm+"<td>"+p.antallBilletter+"</td><td>"
            +p.fornavn+"</td><td>"+p.etternavn+"</td><td>p.telefonnr<td>p.epost</td>";
        ut+="</tr>";

        document.getElementById("visPersonRegister").innerHTML=ut;
    }
}

function slettBillettene() {
    personRegister = [];
    document.getElementById("visPersonRegister").innerHTML="";
}

