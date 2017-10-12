package com.mts.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mts.jpa.dao.IDaoEquipe;
import com.mts.jpa.dao.IDaoFiche;
import com.mts.jpa.data.entities.Fiche;
import com.mts.service.IGlobalService;
import com.mts.web.dv.Equipe;

@Service(value="globalService")
public class GlobalService implements IGlobalService {
	
	@Autowired
	private IDaoFiche daoFiche;
	
	@Autowired
	private IDaoEquipe daoEquipe;

	
	public List<Equipe> getAllEquipe() {
		List<Equipe> list =daoEquipe.getAll();
		System.out.println("@@@@@@ list equipe : "+ list);
		return list;
	}
	
	public List<Fiche> getAllFiche() {
		List<Fiche> list =daoFiche.getAll();
		System.out.println("@@@@@@ list fiche : "+ list);
		return list;
	}
	
	@Override
	public List<Fiche> getFicheByEquipeId(int equipeId) {
		return daoFiche.getByEquipeId(equipeId);
	}

	@Override
	public List<Equipe> getUserEquipe(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	public IDaoEquipe getDaoEquipe() {
		return daoEquipe;
	}

	public void setDaoEquipe(IDaoEquipe daoEquipe) {
		this.daoEquipe = daoEquipe;
	}

	@Override
	public Equipe getEquipeById(int id) {
		return daoEquipe.getById(id);
	}

	@Override
	public Fiche getFicheById(int id) {
		return daoFiche.getById(id);
	}

	@Override
	public Fiche updateFiche(Fiche fiche) {
		// TODO Auto-generated method stub
		return daoFiche.modifier(fiche);
	}

	
	
}
