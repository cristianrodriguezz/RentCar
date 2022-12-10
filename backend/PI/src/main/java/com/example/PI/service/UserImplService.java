package com.example.PI.service;

import com.example.PI.entities.UserImpl;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserImplService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public UserImpl buscarXEmail(String email) {
        return usuarioRepository.findUsuarioByEmail(email).get();
    }

    public List<UserImpl> buscarTodos(){
        return usuarioRepository.findAll();
    }
    public UserImpl agregarUser(UserImpl user) throws ResourceNotFoundException {
        Optional<UserImpl> usuarioBuscado = usuarioRepository.findUsuarioByEmail(user.getEmail());
        if (usuarioBuscado.isPresent()){
            throw new ResourceNotFoundException("Ya existe un usuario con ese email registrado");
        }else {
            return usuarioRepository.save(user);
        }
    }
    public Optional<UserImpl> buscarXId(Long id) {
        return usuarioRepository.findById(id);
    }
}
