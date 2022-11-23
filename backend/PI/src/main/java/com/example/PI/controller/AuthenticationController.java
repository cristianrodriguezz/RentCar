package com.example.PI.controller;

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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTTokenHelper jwtTokenHelper;
    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserImpl usuario) throws InvalidKeySpecException, NoSuchAlgorithmException {

        final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                usuario.getEmail(), usuario.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserImpl user=(UserImpl) authentication.getPrincipal();
        String jwtToken=jwtTokenHelper.generateToken(user.getUsername());

        LoginResponse response=new LoginResponse();
        response.setToken(jwtToken);


        return ResponseEntity.ok(response);
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user){
        MainUsuario userObj=(MainUsuario) userDetailsService.loadUserByUsername(user.getName());

        UserInfo userInfo=new UserInfo();
        userInfo.setFirstName(userObj.getName());
        userInfo.setLastName(userObj.getLastName());
        userInfo.setRoles(userObj.getAuthorities().toArray());


        return ResponseEntity.ok(userInfo);



    }
}

