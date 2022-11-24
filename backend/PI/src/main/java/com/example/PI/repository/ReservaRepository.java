package com.example.PI.repository;

import com.example.PI.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    @Query(" FROM Reserva as r join r.producto as p where p.id = ?1")
    Optional<List<Reserva>> buscarReservasPorProductoID (Long id);
}
