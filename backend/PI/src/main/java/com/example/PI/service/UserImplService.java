package com.example.PI.service;

import com.example.PI.entities.UserImpl;
import com.example.PI.exceptions.BadRequestException;
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
        return usuarioRepository.findUsuarioByEmail(email);
    }
    public List<UserImpl> buscarTodos(){
        return usuarioRepository.findAll();
    }
    public UserImpl agregarUser(UserImpl user) throws BadRequestException {
        return usuarioRepository.save(user);
    }
    public Optional<UserImpl> buscarXId(Long id) {
        return usuarioRepository.findById(id);
    }
}
