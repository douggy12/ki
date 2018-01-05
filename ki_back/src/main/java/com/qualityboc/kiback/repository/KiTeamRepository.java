/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.repository;

import com.qualityboc.kiback.domain.KiTeam;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

/**
 *
 * @author dmetthey
 */
@RepositoryRestResource(collectionResourceRel = "team", path = "team")
public interface KiTeamRepository extends PagingAndSortingRepository<KiTeam, Long> {
    KiTeam findByIhniId(@Param("ihniId") Long id);
}
