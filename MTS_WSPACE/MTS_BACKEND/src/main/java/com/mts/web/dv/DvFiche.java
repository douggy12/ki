package com.mts.web.dv;

import java.util.Arrays;

import com.mts.jpa.data.entities.Fiche;

public class DvFiche {
	
	private int ficheId;
	
	private int nbrEnfant;
	
	private String photo; 
	
	private String parcours[]; 
	
	private String nom;
	
	private String prenom;
	
	private String equipe; 
	
	private String poste;
	
	private String dateN;

	public DvFiche(){}
	public DvFiche(Utilisateur user, Fiche fiche){
		if(fiche!=null){
			this.ficheId=fiche.getFicheId();
			this.nbrEnfant=fiche.getNbrEnfant();
			this.photo=fiche.getPhoto();
		}
		
		if(user!=null){
			this.ficheId=user.getUserId();
			this.nom=user.getNom();
			this.prenom=user.getPrenom();
			this.dateN=user.getDateN();
			this.equipe=user.getEquipe();
			this.poste=user.getPoste();
			if(this.parcours!=null){
			this.parcours=fiche.getPracours().split(";");
			}else {
			//this.parcours=[];
			}
		}
	}
	public int getFicheId() {
		return ficheId;
	}

	public void setFicheId(int ficheId) {
		this.ficheId = ficheId;
	}

	public int getNbrEnfant() {
		return nbrEnfant;
	}

	public void setNbrEnfant(int nbrEnfant) {
		this.nbrEnfant = nbrEnfant;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
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
	public String[] getParcours() {
		return parcours;
	}
	public void setParcours(String[] parcours) {
		this.parcours = parcours;
	}
//	@Override
//	public String toString() {
//		return "DvFiche [ficheId=" + ficheId + ", nbrEnfant=" + nbrEnfant + ", photo=" + photo + ", parcours="
//				+ Arrays.toString(parcours) + ", nom=" + nom + ", prenom=" + prenom + ", equipe=" + equipe + ", poste="
//				+ poste + ", dateN=" + dateN + "]";
//	}
	
	
	
}
