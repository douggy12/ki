package com.mts.jpa.dao;

import java.util.List;

import com.mts.jpa.data.entities.Fiche;

public interface IDaoFiche extends IDao<Fiche> {
	
	Fiche getById(Integer id);
	List<Fiche> getByEquipeId(Integer idEquipe);

}
