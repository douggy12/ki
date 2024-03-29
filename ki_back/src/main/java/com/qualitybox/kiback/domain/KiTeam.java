/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.domain;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author dmetthey
 */
@Entity
public class KiTeam implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(length = 2500)
    private String description;
    private Long ihniId;
    @Column
    private String type;
    @Column
    private Long referentIhniId;
    @Column
    private LocalDateTime activitySince;
    
    public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public LocalDateTime getActivitySince() {
		return activitySince;
	}

	public Long getReferentIhniId() {
		return referentIhniId;
	}

	public void setReferentIhniId(Long referentIhniId) {
		this.referentIhniId = referentIhniId;
	}

	public void setActivitySince(LocalDateTime activitySince) {
		this.activitySince = activitySince;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getIhniId() {
        return ihniId;
    }

    public void setIhniId(Long ihniId) {
        this.ihniId = ihniId;
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
        if (!(object instanceof KiTeam)) {
            return false;
        }
        KiTeam other = (KiTeam) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.qualitybox.kiback.domain.KiTeam[ id=" + id + " ]";
    }
    
}
