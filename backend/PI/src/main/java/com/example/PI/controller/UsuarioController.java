package com.example.PI.controller;
import com.example.PI.entities.UserImpl;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.service.UserImplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UserImplService userImplService;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping
    public ResponseEntity<Map<String, Object>> index() {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", userImplService.buscarTodos());
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> create(@RequestBody UserImpl user) throws ResourceNotFoundException {
        Map<String, Object> response = new HashMap<>();
        String passWEncrypt = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(passWEncrypt);
        response.put("respuesta", userImplService.agregarUser(user));
        return ResponseEntity.created(URI.create("/usuarios")).body(response);
    }

    /*
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> findById(@PathVariable Long id) throws Exception {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", userImplService.buscarXId(id));
        return ResponseEntity.ok(response);
    }
    */
    @GetMapping("/{email}")
    public ResponseEntity<Map<String, Object>> findByEmail(@PathVariable String email) throws Exception {
        Map<String, Object> response = new HashMap<>();
        response.put("respuesta", userImplService.buscarXEmail(email));
        return ResponseEntity.ok(response);
    }

}

