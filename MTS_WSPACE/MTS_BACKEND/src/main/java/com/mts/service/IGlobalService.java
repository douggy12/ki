package com.mts.service;

import java.util.List;

import com.mts.jpa.data.entities.Fiche;
import com.mts.web.dv.Equipe;

public interface IGlobalService {

	List<Equipe> getAllEquipe();
	
	List<Fiche> getAllFiche();
	
	List<Fiche> getFicheByEquipeId(int equipeId);
	
	List<Equipe> getUserEquipe(int userId);
	
	Equipe getEquipeById(int id);
	Fiche getFicheById(int id);
	
	Fiche updateFiche(Fiche fiche);
}
