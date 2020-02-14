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

    if (valgtFilm === "" || fornavn === "" || etternavn === "" || telefonnr === "" || epost === "" ){
        document.getElementById("feilValgtFilm");
        document.getElementById("feilFornavn").innerHTML = "påbudt med fornavn!";
        document.getElementById("feilEtternavn").innerHTML = "Feil etternavn!";
    }

    document.getElementById("valgtFilm").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

    let ut = "<table><tr>" +
        "<th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";

    for (let p of personRegister){
        console.log(personRegister);
        ut+="<tr>";
        ut+="<td>"+p.valgtFilm+"<td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>p.epost</td>";
        ut+="</tr>";

        document.getElementById("visPersonRegister").innerHTML=ut;
    }

}

function slettBillettene() {
    personRegister = [];
    document.getElementById("visPersonRegister").innerHTML="";


}

