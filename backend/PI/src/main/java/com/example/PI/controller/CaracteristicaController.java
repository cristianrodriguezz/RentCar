package com.example.PI.controller;

import com.example.PI.entities.Caracteristica;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.service.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/caracteristicas")
public class CaracteristicaController {
    @Autowired
    CaracteristicaService caracteristicaService;
    @PostMapping
    public ResponseEntity<Caracteristica> guardarCaracteristica(@RequestBody Caracteristica caracteristica)throws BadRequestException {
        return ResponseEntity.ok(caracteristicaService.guardarCaracteristica(caracteristica));
    }
    @PutMapping
    public ResponseEntity<Caracteristica> actualizarCaracteristica(@RequestBody Caracteristica caracteristica) throws Exception {
        return ResponseEntity.ok(caracteristicaService.actualizarCaracteristica(caracteristica));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Caracteristica> buscarxId(@PathVariable Long id)throws Exception{
        Optional<Caracteristica> caracteristicaBuscada = caracteristicaService.buscarxId(id);
        return ResponseEntity.ok(caracteristicaBuscada.get());
    }
    @GetMapping
    public ResponseEntity<List<Caracteristica>> buscarTodas() throws Exception {
      return ResponseEntity.ok(caracteristicaService.buscarTodas());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCaracteristica(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(caracteristicaService.eliminarCaracteristica(id));
    }
}
