package com.example.PI.repository;

import com.example.PI.entities.Producto;
import com.example.PI.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    @Query(" FROM Reserva as r join r.producto as p where p.id = ?1")
    Optional<List<Reserva>> buscarReservasPorProductoID (Long id);

    @Query("FROM Reserva as r where r.fechaInicioReserva = ?1 AND r.fechaFinalReserva = ?2")
    Optional<List<Reserva>> finReservasByFechas(LocalDate start, LocalDate end);
    @Query("FROM Reserva as r inner join r.user as u where u.id=?1")
    Optional<List<Reserva>> buscarReservasByIdCliente(Long id);
}
