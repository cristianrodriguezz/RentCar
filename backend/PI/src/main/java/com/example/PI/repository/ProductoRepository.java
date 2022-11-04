package com.example.PI.repository;

import com.example.PI.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    Optional<Producto> findProductoByNombre(String nombre);
    Producto findProductById(long id );
}
