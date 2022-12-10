package com.example.PI.security;

import com.example.PI.entities.MainUsuario;
import com.example.PI.entities.RoleEntity;
import com.example.PI.entities.UserImpl;
import com.example.PI.repository.RoleRepository;
import com.example.PI.repository.UsuarioRepository;
import org.apache.catalina.Role;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CargadorDeDatos implements ApplicationRunner {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    RoleRepository roleRepository;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        Optional<UserImpl> user = usuarioRepository.findUsuarioByEmail("admin123@gmail.com");
        if (!user.isPresent()){
            RoleEntity role = new RoleEntity();
            role.setRoleName("ROLE_ADMIN");
            roleRepository.save(role);
            BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
            String password = "admin123";
            String passHash2=passwordEncoder.encode(password);
            UserImpl usuario2= new UserImpl();
            usuario2.setUsername("Admin123");
            usuario2.setEmail("admin123@gmail.com");
            usuario2.setPassword(passHash2);
            usuario2.setRole(role);
            usuarioRepository.save(usuario2);
            RoleEntity role2 = new RoleEntity();
            role.setRoleName("ROLE_USER");
            roleRepository.save(role2);

        }

    }
}
