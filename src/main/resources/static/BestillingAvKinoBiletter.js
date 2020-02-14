let personRegister = [];

function billettKjopt(){

    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const person = {
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost,
    };

    personRegister.push(person);
    console.log(personRegister);

    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

    let ut = "<table><tr>" + "<th>Film</th></th>Fornavn<th>Etternavn</th><th>Adresse</th><th>Telefonnr</th>" + "</tr>";

    for (let p of personRegister){
        console.log(personRegister);
        ut+="<tr>";
        ut+="<td>"+p.fornavn+"<td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";

        document.getElementById("visPersonRegister").innerHTML=ut;
    }

}

function slettBillettene() {
    personRegister = [];
    document.getElementById("slettBilettene").innerHTML="";

}

