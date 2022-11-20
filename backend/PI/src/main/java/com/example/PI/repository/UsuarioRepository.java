package com.example.PI.repository;

import com.example.PI.entities.Producto;
import com.example.PI.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    Optional<Usuario> findUsuarioByEmail(String email);

}
