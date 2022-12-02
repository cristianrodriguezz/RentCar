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


    @Query(" FROM Producto as p join p.ciudad as c where c.id = ?1")
    Optional<List<Producto>> buscarProductosByCiudadId(Long id);

    @Query("FROM Producto as p join p.reservas as r where r.fechaInicioReserva = ?1 AND r.fechaFinalReserva=?2")
    Optional<List<Producto>> buscarProductosPorFechaDeReserva(LocalDate start, LocalDate end);


}
