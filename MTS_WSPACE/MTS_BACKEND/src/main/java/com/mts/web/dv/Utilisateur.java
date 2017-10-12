package com.mts.web.dv;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Utilisateur {

	private int userId;
	
	private String nom;
	
	private String prenom;
	
	private String equipe; 
	
	private String poste;
	
	private String dateN;
	
	public Utilisateur(){}
	
	public Utilisateur(DvFiche in) {
		this.userId = in.getFicheId();
		this.nom = in.getNom();
		this.prenom = in.getPrenom();
		this.equipe = in.getEquipe();
		this.poste = in.getPoste();
		this.dateN = in.getDateN();
	}

	/// getters & setters 
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEquipe() {
		return equipe;
	}

	public void setEquipe(String equipe) {
		this.equipe = equipe;
	}

	public String getPoste() {
		return poste;
	}

	public void setPoste(String poste) {
		this.poste = poste;
	}

	public String getDateN() {
		return dateN;
	}

	public void setDateN(String dateN) {
		this.dateN = dateN;
	}


	
	
	
	
}
