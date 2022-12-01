package com.example.PI.controller;


import com.example.PI.dto.ReservaDTO;
import com.example.PI.entities.Reserva;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/reservas")
public class ReservaController {
    @Autowired
    ReservaService reservaService;

    @PostMapping
    public ResponseEntity<ReservaDTO> crearReserva(@RequestBody ReservaDTO reserva) throws BadRequestException {
        return ResponseEntity.ok(reservaService.crearReserva(reserva));
    }

    @GetMapping("/producto/{id}")
    public ResponseEntity<List<Reserva>> buscarReservaPorIdDeProducto(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(reservaService.buscarReservasPorProductoID(id));
    }
    @GetMapping()
    public ResponseEntity<List<Reserva>> buscarTodos()throws Exception{
        return ResponseEntity.ok(reservaService.buscarTodosLasReserva());
    }


}
