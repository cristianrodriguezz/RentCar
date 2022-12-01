package com.example.PI.service;

import com.example.PI.dto.ReservaDTO;
import com.example.PI.entities.Producto;
import com.example.PI.entities.Reserva;
import com.example.PI.entities.UserImpl;
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
    @Autowired
    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository= reservaRepository;
    }

    public ReservaDTO crearReserva (ReservaDTO reserva) {
        Reserva reservaEntity = new Reserva();
        reservaEntity.setHoraComienzoDeReserva(reserva.getHoraComienzoDeReserva());
        reservaEntity.setFechaInicioReserva(reserva.getFechaInicioReserva());
        reservaEntity.setFechaFinalReserva(reserva.getFechaFinalReserva());
        UserImpl user = new UserImpl();
        user.setId(reserva.getUser_id());
        Producto producto = new Producto();
        producto.setId(reserva.getProducto_id());
        reservaEntity.setUser(user);
        reservaEntity.setProducto(producto);
        Reserva reservaGuardada = reservaRepository.save(reservaEntity);
        ReservaDTO reservaDTO = new ReservaDTO();
        reservaDTO.setHoraComienzoDeReserva(reservaGuardada.getHoraComienzoDeReserva());
        reservaDTO.setFechaFinalReserva(reservaGuardada.getFechaFinalReserva());
        reservaDTO.setFechaInicioReserva(reservaGuardada.getFechaInicioReserva());
        reservaDTO.setUser_id(reservaGuardada.getUser().getId());
        reservaDTO.setProducto_id(reservaGuardada.getProducto().getId());
        reservaDTO.setId(reservaGuardada.getId());
        return reservaDTO;
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
    public List<Reserva> buscarTodosLasReserva() throws Exception{
        return reservaRepository.findAll();
    }
}
