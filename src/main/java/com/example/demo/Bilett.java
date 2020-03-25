package com.example.demo;

public class Bilett {
    private String antallBiletter;
    private String valgtFilm;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;

    public Bilett(String antallBiletter, String valgtFilm, String fornavn, String etternavn, String telefonnr, String epost) {
        this.antallBiletter = antallBiletter;
        this.valgtFilm = valgtFilm;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }

    public Bilett() {
    }


    public String getAntallBiletter() {
        return antallBiletter;
    }

    public void setAntallBiletter(String antallBiletter) {
        this.antallBiletter = antallBiletter;
    }

    public String getValgtFilm() {
        return valgtFilm;
    }

    public void setValgtFilm(String valgtFilm) {
        this.valgtFilm = valgtFilm;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

}



