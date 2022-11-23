package com.example.PI.service;

import com.example.PI.entities.RoleEntity;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;
import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;
    public RoleEntity guardarRol(RoleEntity rol) throws BadRequestException {
        Optional<RoleEntity> rolXNombre = roleRepository.findRolByRoleName(rol.getRoleName());
        if (rolXNombre.isPresent()){
            throw new BadRequestException("Ya existe un rol con el nombre: " + rol.getRoleName());
        }else {
            return roleRepository.save(rol);
        }
    }
}
