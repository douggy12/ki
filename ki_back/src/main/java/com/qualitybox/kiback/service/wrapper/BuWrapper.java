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
public class BuWrapper {
    private Long id;
    private String nom;
    private String description;
    private List<AgenceWrapper> agences;

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

    public List<AgenceWrapper> getAgences() {
        return agences;
    }

    public void setAgences(List<AgenceWrapper> agences) {
        this.agences = agences;
    }
    
    
}
