/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service.wrapper;



/**
 *
 * @author dmetthey
 */
public class TeamWrapper {
    private Long id;
    private String name;
    private DateWrapper createdAt;
    private UserWrapper pilote;
    private String agence;
   

    public TeamWrapper() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DateWrapper getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(DateWrapper createdAt) {
        this.createdAt = createdAt;
    }

    public UserWrapper getPilote() {
        return pilote;
    }

    public void setPilote(UserWrapper pilote) {
        this.pilote = pilote;
    }

    public String getAgence() {
        return agence;
    }

    public void setAgence( String agence ) {
        this.agence = agence;
    }
}
