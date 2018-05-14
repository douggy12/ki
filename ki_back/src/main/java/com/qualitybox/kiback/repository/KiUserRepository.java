/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.repository;

import com.qualityboc.kiback.domain.KiUser;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author dmetthey
 */
@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface KiUserRepository extends PagingAndSortingRepository<KiUser, Long> {
    KiUser findByIhniId(@Param("ihniId") Long id);
}
