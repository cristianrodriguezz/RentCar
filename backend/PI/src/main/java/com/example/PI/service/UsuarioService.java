package com.example.PI.service;

import com.example.PI.entities.Categoria;
import com.example.PI.entities.Producto;
import com.example.PI.entities.Usuario;
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
public class UsuarioService implements UserDetailsService {
    private final UsuarioRepository usuarioRepository;
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuarioBuscado= usuarioRepository.findUsuarioByEmail(username);
        if (usuarioBuscado.isPresent()){
            return usuarioBuscado.get();
        }
        else {
            throw new UsernameNotFoundException("El correo ingresado no existe vinculado a un usuario.");
        }
    }
    public List<Usuario> buscarTodos (){
        return usuarioRepository.findAll();
    }
    public Usuario crearUsuario (Usuario usuario)throws BadRequestException {
       Optional<Usuario> usuarioABuscar = usuarioRepository.findUsuarioByEmail(usuario.getEmail());
       if (usuarioABuscar.isPresent()){
           throw new BadRequestException("Ya existe este usuario");
       }
       else{
           return usuarioRepository.save(usuario);
       }
    }
    public Optional<Usuario> buscarxId(Long id)throws Exception {
        Optional<Usuario> usuarioBuscado = usuarioRepository.findById(id);
        if(usuarioBuscado.isPresent()){
            return usuarioBuscado;
        }
        else{
            throw new ResourceNotFoundException("No existe la categoría con id: " + id);
        }
    }
    public String eliminarUsuarioPorId(Long id) throws Exception {
        Optional<Usuario> UsuarioABorrar = buscarxId(id);
        usuarioRepository.deleteById(id);
        return "Se borró con éxito el producto con id: " + id;
    }


}
