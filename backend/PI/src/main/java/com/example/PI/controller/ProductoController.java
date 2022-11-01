package com.example.PI.controller;

import com.example.PI.entities.Producto;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {
    @Autowired
    ProductoService productoService;

    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) throws BadRequestException {
        return ResponseEntity.ok(productoService.crearProducto(producto));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscarProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.buscarProductoPorId(id));
    }
    @GetMapping
    public ResponseEntity<List<Producto>> buscarTodos() throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.listarTodos());
    }
}
