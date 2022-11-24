package com.example.PI.controller;

import com.example.PI.entities.RoleEntity;
import com.example.PI.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.Role;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/roles")
public class RoleController {
    @Autowired
    RoleService roleService;
    @PostMapping
    public ResponseEntity<RoleEntity> guardarRol(@RequestBody RoleEntity rol)throws Exception {
        return ResponseEntity.ok(roleService.guardarRol(rol));
    }
}
