function visPersonRegister(){
    let personRegister=["Fornavn", "Etternavn", "Telefonnr", "Epost"];

    personRegister.push("Fornavn", "Etternavn", "Telefonnr", "Epost");

    document.getElementById("fornavn").value;

    // skriv ut
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";

    for (let p of personRegister){
        ut+="<tr>";
        ut+="<td>"+p.navn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("personRegister").innerHTML=ut;
}