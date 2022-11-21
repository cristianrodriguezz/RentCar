package com.example.PI.controller;

import com.example.PI.entities.Usuario;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    private UsuarioService usuarioService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping
    public ResponseEntity<Map<String, Object>> index() {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", usuarioService.buscarTodos());
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> create(@RequestBody Usuario user) throws BadRequestException {
        Map<String, Object> response = new HashMap<>();
        String passWEncrypt = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(passWEncrypt);
        response.put("respuesta", usuarioService.crearUsuario(user));
        return ResponseEntity.created(URI.create("/usuarios")).body(response);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> findById(@PathVariable Long id) throws Exception {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", usuarioService.buscarxId(id));
        return ResponseEntity.ok(response);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) throws Exception {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", usuarioService.eliminarUsuarioPorId(id));
        return ResponseEntity.noContent().build();//(response);
    }
}

