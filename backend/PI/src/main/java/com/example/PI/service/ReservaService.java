package com.example.PI.service;

import com.example.PI.dto.ReservaDTO;
import com.example.PI.entities.Producto;
import com.example.PI.entities.Reserva;
import com.example.PI.entities.UserImpl;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List<ReservaDTO> buscarReservasPorProductoID (Long id) throws Exception {
            Optional<List<Reserva>> reservas = reservaRepository.buscarReservasPorProductoID(id);
            List<ReservaDTO> reservasDTO = new ArrayList<ReservaDTO>();
            if (reservas.get().size() < 0){
                return new ArrayList<>();
            }
            else{
                List<Reserva> reservasBuscada = reservas.get();
                reservasBuscada.forEach(reserva -> {
                    ReservaDTO reservaDTO = new ReservaDTO();
                    reservaDTO.setId(reserva.getId());
                    reservaDTO.setFechaInicioReserva(reserva.getFechaInicioReserva());
                    reservaDTO.setHoraComienzoDeReserva(reserva.getHoraComienzoDeReserva());
                    reservaDTO.setFechaFinalReserva(reserva.getFechaFinalReserva());
                    reservaDTO.setUser_id(reserva.getUser().getId());
                    reservaDTO.setProducto_id(reserva.getProducto().getId());
                    reservasDTO.add(reservaDTO);
            });}
            return reservasDTO;
    }

    public String eliminarReservaPorId(Long id) throws ResourceNotFoundException {
        Optional<Reserva> reservaABorrar = reservaRepository.findById(id);
        reservaRepository.delete(reservaABorrar.get());
        return "Se borró con éxito la reserva con id: " + id;
    }
    public List<ReservaDTO> buscarTodosLasReserva() throws Exception {
        List<Reserva> reservas = reservaRepository.findAll();
        List<ReservaDTO> reservasDTOS = new ArrayList<ReservaDTO>();
        reservas.forEach(reserva -> {
            ReservaDTO reservaDTO = new ReservaDTO();
            reservaDTO.setId(reserva.getId());
            reservaDTO.setFechaInicioReserva(reserva.getFechaInicioReserva());
            reservaDTO.setHoraComienzoDeReserva(reserva.getHoraComienzoDeReserva());
            reservaDTO.setFechaFinalReserva(reserva.getFechaFinalReserva());
            reservaDTO.setUser_id(reserva.getUser().getId());
            reservaDTO.setProducto_id(reserva.getProducto().getId());
            reservasDTOS.add(reservaDTO);
        });
        return reservasDTOS;
    }
    public List<ReservaDTO> buscarReservasporIdDeCliente (Long id) throws Exception {
        Optional<List<Reserva>> reservas = reservaRepository.buscarReservasByIdCliente(id);
        List<ReservaDTO> reservasDTO = new ArrayList<ReservaDTO>();
        if (reservas.get().size() < 0){
            return new ArrayList<>();
        }
        else{
            List<Reserva> reservasBuscada = reservas.get();
            reservasBuscada.forEach(reserva -> {
                ReservaDTO reservaDTO = new ReservaDTO();
                reservaDTO.setId(reserva.getId());
                reservaDTO.setFechaInicioReserva(reserva.getFechaInicioReserva());
                reservaDTO.setHoraComienzoDeReserva(reserva.getHoraComienzoDeReserva());
                reservaDTO.setFechaFinalReserva(reserva.getFechaFinalReserva());
                reservaDTO.setUser_id(reserva.getUser().getId());
                reservaDTO.setProducto_id(reserva.getProducto().getId());
                reservasDTO.add(reservaDTO);
            });}
        return reservasDTO;
    }
}
