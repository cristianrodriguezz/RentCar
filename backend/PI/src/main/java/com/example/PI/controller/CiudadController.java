package com.example.PI.controller;

import com.example.PI.entities.Ciudad;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ciudades")
@CrossOrigin(origins = "http://localhost:3001")
public class CiudadController {
    @Autowired
    CiudadService ciudadService;
    @PostMapping
    public ResponseEntity<Ciudad> guardarCiudad(@RequestBody Ciudad ciudad) throws BadRequestException {
        return ResponseEntity.ok(ciudadService.guardarCiudad(ciudad));
    }
    @PutMapping
    public ResponseEntity<Ciudad> actualizarCiudad(@RequestBody Ciudad ciudad)throws Exception {
        return ResponseEntity.ok(ciudadService.actualizarCiudad(ciudad));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> buscarxId(@PathVariable Long id) throws Exception {
        Optional<Ciudad> ciudadBuscada = ciudadService.buscarxId(id);
        return ResponseEntity.ok(ciudadBuscada.get());
    }
    @GetMapping
    public ResponseEntity<List<Ciudad>> buscarTodas()throws Exception {
        return ResponseEntity.ok(ciudadService.buscarTodas());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCiudad(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(ciudadService.eliminarCiudad(id));
    }
}
