package com.example.PI.repository;

import com.example.PI.entities.Caracteristica;
import com.example.PI.entities.Producto;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CaracteristicaRepository extends JpaRepository<Caracteristica,Long> {
    Optional<Caracteristica> findCaracteristicaByNombre(String Nombre);
}
