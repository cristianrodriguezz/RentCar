package com.example.PI.controller;

import com.example.PI.entities.Categoria;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    @Autowired
    CategoriaService categoriaService;
    @PostMapping
    public ResponseEntity<Categoria> guardarCategoria(@RequestBody Categoria categoria) throws BadRequestException {
        return ResponseEntity.ok(categoriaService.guardarCategoria(categoria));
    }
    @PutMapping
    public ResponseEntity<Categoria> actualizarCategoria(@RequestBody Categoria categoria) throws Exception {
        return ResponseEntity.ok(categoriaService.actualizarCategoria(categoria));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarxId(@PathVariable Long id ) throws Exception {
        Optional<Categoria> categoriaBuscada = categoriaService.buscarxId(id);
        return ResponseEntity.ok(categoriaBuscada.get());
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> buscarTodas(){
        return ResponseEntity.ok(categoriaService.buscarTodas());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(categoriaService.eliminarCategoria(id));
    }
}

