/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service.wrapper;



/**
 *
 * @author dmetthey
 */
public class TeamWrapper {
    private Long id;
    private String name;
    private DateWrapper createdAt;
    private UserInfoWrapper pilote;
   

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

    public UserInfoWrapper getPilote() {
        return pilote;
    }

    public void setPilote(UserInfoWrapper pilote) {
        this.pilote = pilote;
    }

    
    
}
