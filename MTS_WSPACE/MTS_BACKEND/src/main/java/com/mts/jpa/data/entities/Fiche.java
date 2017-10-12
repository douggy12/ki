package com.mts.jpa.data.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

import org.springframework.util.StringUtils;

import com.mts.web.dv.DvFiche;

@Entity
@NamedQuery(name="Fiche.findAll", query="SELECT f FROM Fiche f")
public class Fiche {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="fiche_id")
	private int ficheId;
	
	
	@Column(name="nbrEnf")
	private int nbrEnfant;
	
	@Column(name="photo")
	private String photo; 
	
	@Column(name="parcours")
	private String pracours; 
	
	public Fiche(){}
	
	public Fiche(DvFiche in) {
		this.ficheId = in.getFicheId();
		this.nbrEnfant = in.getNbrEnfant();
		this.photo = in.getPhoto();
		this.pracours = StringUtils.arrayToDelimitedString(in.getParcours(),";");
	}
	/// Getters and Setters
	
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
	public String getPracours() {
		return pracours;
	}
	public void setPracours(String pracours) {
		this.pracours = pracours;
	}
	
	
	
	
}
