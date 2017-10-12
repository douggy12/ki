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
	 * Méthode de création des objets entités.
	 * @param objet
	 */
	@Transactional(propagation=Propagation.REQUIRED)
	public void creer(T objet){
		entityManager.persist(objet);
	}
	
	/**
	 * Méthode de mise à jour des objets entités.
	 * @param objet
	 */
	@Transactional
	public T modifier(T objet){
		return entityManager.merge(objet);
	}
	
	/**
	 * Méthode de suppression des objets entités.
	 * @param objet
	 */
	@Transactional
	public void supprimer(T objet){
		entityManager.remove(objet);
	}
	/**
	 * Méthode de recherche d'entité par clé primaire.
	 * @param c : la classe de l'objet
	 * @param id : l'identifiant de l'objet
	 * @return Object : l'objet recherché 
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
