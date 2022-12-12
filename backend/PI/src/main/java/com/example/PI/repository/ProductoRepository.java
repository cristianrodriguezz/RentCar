package com.example.PI.repository;

import com.example.PI.entities.Producto;
import net.bytebuddy.asm.Advice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    Optional<Producto> findProductoByNombre(String nombre);

    @Query("SELECT p FROM Producto p inner join Categoria c on p.categoria = c.id where c.id=?1")
    Optional<List<Producto>> buscarCategoriasById(Long id);


    @Query(value = "SELECT * FROM productos as p WHERE (p.id not in (SELECT producto_id FROM productos as p LEFT JOIN reservas as r ON p.id=r.producto_id WHERE (r.fecha_inicio_reserva BETWEEN ?1 and ?2)  OR (r.fecha_final_reserva BETWEEN ?1 and ?2))) AND p.ciudad_id LIKE ?3 group by p.id; ",nativeQuery = true)
    Optional<List<Producto>> buscarProductosByCiudadId(LocalDate fechaInicio, LocalDate fechaFinal, Long id);





}
