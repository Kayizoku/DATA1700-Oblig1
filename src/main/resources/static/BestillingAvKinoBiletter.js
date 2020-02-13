
var addBtn = document.getElementById("btn");
var kundeData = [];

function kunder(etternavn, fornavn, telefonnr, epost ) {
    this.etternavn = etternavn;
    this.fornavn = fornavn;
    this.telefonnr = telefonnr;
    this.epost = epost;

}

document.getElementById("kjopPresset").addEventListener("click", kundeData);


function kjøpPresset() {
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    alert("Informasjonen oppgitt er: "+fornavn + etternavn + telefonnr + epost);
}

function hvisAlleBilett() {
    
}

function slettBruker() {

}