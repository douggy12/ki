package com.mts.jpa.dao;

import java.util.List;

import com.mts.jpa.data.entities.Fiche;

public interface IDao<T> {

	public void creer(T objet);
	public T modifier(T objet);
	public void supprimer(T objet);
	public T rechercherParPK(Object id);
	public List<T> getAll();

}
