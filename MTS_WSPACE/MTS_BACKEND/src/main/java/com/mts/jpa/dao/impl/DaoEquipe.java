package com.mts.jpa.dao.impl;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.mts.jpa.dao.IDaoEquipe;
import com.mts.web.dv.Equipe;


@Repository(value="daoEquipe")
public class DaoEquipe extends Dao<Equipe> implements IDaoEquipe {
	
	String GET_BY_ID = "select c.* from Equipe c where c.equipe_id = :id";


	public DaoEquipe() {
		super(Equipe.class);
	}

	public Equipe getById(int id) {
		Query query = entityManager.createNativeQuery(GET_BY_ID, Equipe.class);
		query.setParameter("id", id);
		List<Equipe> equipes = query.getResultList();
		if (equipes.size() > 0) {
			return equipes.get(0);
		} else {
			return null;
		}
	}
	
	
	

}
