package com.example.PI.repository;

import com.example.PI.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    Optional<Producto> findProductoByNombre(String nombre);

    @Query("SELECT p FROM Producto p inner join Categoria c on p.categoria = c.id where c.id=?1")
    Optional<List<Producto>> buscarCategoriasById(Long id);

    @Query(" SELECT p FROM Productos p inner join productos_x_ciudades pc on p.id = pc.fk_producto inner join Ciudades c on pc.fk_ciudad = c.id where c.nombre =?1")
    Optional<List<Producto>> buscarProductosByCiudad(String ciudad);
}
