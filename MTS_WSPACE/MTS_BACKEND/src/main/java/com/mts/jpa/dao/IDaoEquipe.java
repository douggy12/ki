package com.mts.jpa.dao;

import com.mts.web.dv.Equipe;

public interface IDaoEquipe extends IDao<Equipe> {
	

	Equipe getById(int id);

}
