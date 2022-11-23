package com.example.PI.repository;

import com.example.PI.entities.MainUsuario;
import com.example.PI.entities.UserImpl;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<UserImpl,Long> {
    UserImpl findUsuarioByEmail(String email);

}
