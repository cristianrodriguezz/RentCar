package com.example.PI.service;

import com.example.PI.entities.MainUsuario;
import com.example.PI.entities.UserImpl;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioMainService implements UserDetailsService {
    @Autowired
    private UserImplService userImplService;
    @Autowired
    private final UsuarioRepository usuarioRepository;
    @Autowired
    public UsuarioMainService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserImpl user = userImplService.buscarXEmail(username);
        return MainUsuario.build(user);
    }
    }

