/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service.wrapper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class AgenceWrapper {
    private Long id;
    private String nom;
    private String description;
    private BuWrapper bu;
    private List<TeamWrapper> equipes;

    public AgenceWrapper(String vide) {
        this.id = Long.valueOf(54);
        this.nom = "Le Mans";        
    }
    
    public AgenceWrapper(){
        
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BuWrapper getBu() {
        return bu;
    }

    public void setBu(BuWrapper bu) {
        this.bu = bu;
    }

    public List<TeamWrapper> getEquipes() {
        return equipes;
    }

    public void setEquipes(List<TeamWrapper> equipes) {
        this.equipes = equipes;
    }
    
    
    
}
