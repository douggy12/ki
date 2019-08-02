/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service.wrapper;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreType;
import java.io.Serializable;

/**
 *
 * @author dmetthey
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserWrapper implements Serializable{
    private Long id;
    private String nom;
    private String prenom;
    private String mail;
    private Boolean admin;
  
    private Long createdBy;
    private DateWrapper createdAt;
    private Boolean active;
    private DateWrapper bornDate;
    private String jobName;
    private String agence;
    
    public UserWrapper(){
        
    }
    public UserWrapper(String string) {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public DateWrapper getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(DateWrapper createdAt) {
        this.createdAt = createdAt;
    }

    public Long getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(UserWrapper createdBy) {
        this.createdBy = createdBy.getId();
    }

    
    

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public DateWrapper getBornDate() {
        return bornDate;
    }

    public void setBornDate(DateWrapper bornDate) {
       
        this.bornDate = bornDate;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getAgence() {
        return agence;
    }

    public void setAgence( String agence ) {
        this.agence = agence;
    }

    @Override
    public String toString() {
        return "IhniUser{" + "id=" + id + ", nom=" + nom + ", prenom=" + prenom + '}';
    }
    
}
