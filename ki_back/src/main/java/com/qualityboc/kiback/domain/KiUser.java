/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.domain;

import java.io.Serializable;
import javax.persistence.*;

/**
 *
 * @author dmetthey
 */
@Entity
public class KiUser implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private Long nbEnfant;
    private String avatar;
    private String team_h;
    private Long ihniId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNbEnfant() {
        return nbEnfant;
    }

    public void setNbEnfant(Long nbEnfant) {
        this.nbEnfant = nbEnfant;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Long getIhniId() {
        return ihniId;
    }

    public void setIhniId(Long ihniId) {
        this.ihniId = ihniId;
    }

    public String getTeam_h() {
        return team_h;
    }

    public void setTeam_h(String team_h) {
        this.team_h = team_h;
    }
    
    
    

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof KiUser)) {
            return false;
        }
        KiUser other = (KiUser) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.qualityboc.kiback.domain.User[ id=" + id + " ]";
    }
    
}
