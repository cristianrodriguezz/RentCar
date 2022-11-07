package com.example.PI.repository;

import com.example.PI.entities.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CiudadRepository extends JpaRepository<Ciudad, Long > {
    Optional<Ciudad> findCiudadByNombre(String nombre);
}
