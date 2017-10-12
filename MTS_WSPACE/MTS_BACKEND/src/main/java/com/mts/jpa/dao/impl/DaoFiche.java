package com.mts.jpa.dao.impl;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.mts.jpa.dao.IDaoFiche;
import com.mts.jpa.data.entities.Fiche;

@Repository(value="daoFiche")
public class DaoFiche extends Dao<Fiche> implements IDaoFiche {

	String GET_BY_ID = "select c.* from Fiche c where c.fiche_id = :id";
	String GET_BY_EQUIPE_ID = "select c.* from Fiche c where c.equipe_fk = :id";

	
	public DaoFiche() {
		super(Fiche.class);
		// TODO Auto-generated constructor stub
	}


	@Override
	public Fiche getById(Integer id) {
		Query query = entityManager.createNativeQuery(GET_BY_ID, Fiche.class);
		query.setParameter("id", id);
		List<Fiche> fiches = query.getResultList();
		if (fiches.size() > 0) {
			return fiches.get(0);
		} else {
			return null;
		}
	}
	
	@Override
	public List<Fiche> getByEquipeId(Integer id) {
		Query query = entityManager.createNativeQuery(GET_BY_EQUIPE_ID, Fiche.class);
		query.setParameter("id", id);
		return query.getResultList();
	}

}
