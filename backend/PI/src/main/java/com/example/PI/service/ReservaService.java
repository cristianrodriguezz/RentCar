package com.example.PI.service;

import com.example.PI.entities.Producto;
import com.example.PI.entities.Reserva;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {
    @Autowired
    ReservaRepository reservaRepository;

    public Reserva crearReserva (Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    public List<Reserva> buscarReservasPorProductoID (Long id) throws Exception {
            Optional<List<Reserva>> reservas = reservaRepository.buscarReservasPorProductoID(id);
            if (reservas.get().size() == 0){
                throw new ResourceNotFoundException("No se encontraron las reservas");
            }
            else{
                return reservas.get();

        }
    }

    public String eliminarReservaPorId(Long id) throws ResourceNotFoundException {
        Optional<Reserva> reservaABorrar = reservaRepository.findById(id);
        reservaRepository.delete(reservaABorrar.get());
        return "Se borró con éxito la reserva con id: " + id;
    }
}
