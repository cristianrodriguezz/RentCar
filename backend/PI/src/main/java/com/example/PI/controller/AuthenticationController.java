package com.example.PI.controller;

import com.example.PI.dto.JwtDTO;
import com.example.PI.entities.MainUsuario;
import com.example.PI.entities.UserImpl;
import com.example.PI.requests.AuthenticationRequest;
import com.example.PI.responses.LoginResponse;
import com.example.PI.responses.UserInfo;
import com.example.PI.security.JWTTokenHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTTokenHelper jwtTokenHelper;
    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/token")
    public ResponseEntity<Map<String, Object>> token(@RequestBody UserImpl user) {
        Map<String, Object> response = new HashMap<>();

        /**
         * Usare la autenticación registrada en el ecocsistema de spring boot, donde
         * UsernamePasswordAuthenticationToken tiene prestablecidas las formas y los
         * metodos de busqueda y de encripción para el password.
         *
         * */
       final Authentication authentication = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        /**
         * Luego de realizar esa autenticación y de ver que el usuario si exista en bd, se procede
         * a registrar ese scope o ese usuario en el request, esto con el fin de darle prioridad
         * a la gestión del token
         * */
        SecurityContextHolder.getContext().setAuthentication(authentication);
        /**
         * Procedo a generar el token bajo el resultado de authentication, ya que aquí se encuentran los
         * resultados que me serán posibles setear y/o getear para la utilización y con esto y la información
         * obtenida se envía a generar el token
         * */
        UserImpl userImpl=(UserImpl) authentication.getPrincipal();
        String jwt = jwtTokenHelper.generateToken(authentication);
        /**
         * obtengo y casteo el usuario principal obtenido luego de la autenticación
         * */
        MainUsuario mainUsuario = (MainUsuario) authentication.getPrincipal();
        /**
         * Devuelvo mi objeto, este objeto es creado por mi, ustedes pueden crear su propio objeto y pasarle
         * la información que ustedes deseen pasarle.
         * */
        JwtDTO jwtDTO = new JwtDTO(jwt, "Bearer", mainUsuario.getUsername(), mainUsuario.getAuthorities());
        response.put("respuesta", jwtDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user){
        MainUsuario userObj=(MainUsuario) userDetailsService.loadUserByUsername(user.getName());

        UserInfo userInfo=new UserInfo();
        userInfo.setFirstName(userObj.getNombre());
        userInfo.setLastName(userObj.getApellido());
        userInfo.setRoles(userObj.getAuthorities().toArray());


        return ResponseEntity.ok(userInfo);



    }
}

