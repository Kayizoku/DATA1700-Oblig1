function visPersonRegister(){

    let kundeData = {
        Fornavn: document.getElementById("fornavn").value,
        Etternavn: document.getElementById("etternavn").value,
        Telefonnr: document.getElementById('telefonnr').value,
        Epost: document.getElementById('epost').value
    };

    const person1 = {
        Fornavn : "Mohammad Tayyab",
        Etternavn : "Khalid",
        Telefonnr : 47344987,
        Epost : "TayyabKhalid306@gmail.com"
    };
    kundeData.push(person1);

    for (let i = 0; i < kundeData.length; i++) {
        alert(kundeData[i].Fornavn + kundeData[i].Etternavn
            + kundeData[i].Telefonnr + kundeData[i].Epost);
        kundeData.push();
    }

    // skriv ut
    let ut = "<table><tr>" + "<th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th>" + "</tr>";

    for (let k of kundeData){
        ut+="<tr>";
        ut+="<td>"+k.Fornavn+"</td><td>"+k.Etternavn + "</td><td>"
            +k.Telefonnr+"</td><td>"+k.Epost+"</td>"
        ut+="</tr>"
    }
    document.getElementById("kundeData").innerHTML=ut;
}

