package com.example.PI.repository;

import com.example.PI.entities.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Long> {
    @Query("select c.titulo from Categoria c where c.titulo =?1")
    Optional<Categoria> findCategoriaByTitulo(String titulo);
}
