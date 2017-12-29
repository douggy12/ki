/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service.wrapper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class EquipeRoleWrapper {
    private EquipeWrapper equipe;
    private String role;

    public EquipeRoleWrapper() {
    }

    public EquipeWrapper getEquipe() {
        return equipe;
    }

    public void setEquipe(EquipeWrapper equipe) {
        this.equipe = equipe;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
    
}
