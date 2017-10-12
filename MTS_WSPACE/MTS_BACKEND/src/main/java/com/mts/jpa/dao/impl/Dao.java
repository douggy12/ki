package com.mts.jpa.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.mts.jpa.dao.IDao;

public class Dao<T> implements IDao<T>{
	
	@PersistenceContext
	protected EntityManager entityManager;
	
	Class<T> maClasse;
	
	public Dao(Class<T> pClasse){
		this.maClasse = pClasse;
	}

	/**
	 * M�thode de cr�ation des objets entit�s.
	 * @param objet
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	public void creer(T objet){
		entityManager.persist(objet);
	}
	
	/**
	 * M�thode de mise � jour des objets entit�s.
	 * @param objet
	 */
	@Transactional
	public T modifier(T objet){
		return entityManager.merge(objet);
	}
	
	/**
	 * M�thode de suppression des objets entit�s.
	 * @param objet
	 */
	@Transactional
	public void supprimer(T objet){
		entityManager.remove(objet);
	}
	/**
	 * M�thode de recherche d'entit� par cl� primaire.
	 * @param c : la classe de l'objet
	 * @param id : l'identifiant de l'objet
	 * @return Object : l'objet recherch� 
	 */
	public T rechercherParPK(Object id){
		return entityManager.find(maClasse, id);
	}
	
	public List<T> getAll(){
		Query query = entityManager.createNamedQuery(maClasse.
				getSimpleName() + ".findAll");
		return query.getResultList();
	}
}
