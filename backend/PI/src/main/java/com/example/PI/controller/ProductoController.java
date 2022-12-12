package com.example.PI.controller;

import com.example.PI.entities.Producto;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/productos")
public class ProductoController {
    @Autowired
    ProductoService productoService;

    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) throws BadRequestException {
        return ResponseEntity.ok(productoService.crearProducto(producto));
    }
    @DeleteMapping("/eliminarTodos")
    public ResponseEntity<String> eliminarTodos(){
        return ResponseEntity.ok(productoService.eliminarTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscarProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.buscarProductoPorId(id));
    }
    @GetMapping
    public ResponseEntity<List<Producto>> buscarTodos() throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.listarTodos());
    }
    @DeleteMapping ("/{id}")
    public ResponseEntity<String> eliminarProductoPorId(@PathVariable Long id) throws ResourceNotFoundException {
        return ResponseEntity.ok(productoService.eliminarProductoPorId(id));
    }
    @PutMapping
    public ResponseEntity<Producto> modificarProducto(@RequestBody Producto producto) throws ResourceNotFoundException, BadRequestException {
        return ResponseEntity.ok(productoService.modificarProducto(producto));
    }
    @GetMapping("/category/{id}")
    public ResponseEntity<List<Producto>> buscarProductoXIdDeCategoria(@PathVariable Long id)throws Exception{
        return ResponseEntity.ok(productoService.buscarProductoPorIdDeCategoria(id));
    }


    @GetMapping("ciudad/{id}/fechainicio/{fechaInicio}/fechafin/{fechaFin}")
    public ResponseEntity <List<Producto>> buscarProductoPorUbicacionYFechas (@PathVariable Long id, @DateTimeFormat (iso = DateTimeFormat.ISO.DATE)@PathVariable LocalDate fechaInicio,@DateTimeFormat (iso = DateTimeFormat.ISO.DATE)@PathVariable LocalDate fechaFin) throws ResourceNotFoundException {
        Optional<List<Producto>> productosBuscados = Optional.ofNullable(productoService.buscarProductoPorIdDeCiudad(fechaInicio, fechaFin, id));
        return productosBuscados.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
}

