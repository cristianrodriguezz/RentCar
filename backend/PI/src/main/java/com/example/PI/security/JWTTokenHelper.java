package com.example.PI.security;

import com.example.PI.entities.MainUsuario;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Slf4j
@Component
public class JWTTokenHelper {

    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.expiration}")
    private int expiration;

    /**
     * Metodo que nos ayudara a generar el token a partir de un usuario existente en la base de datos
     * nos creara un usuario principal que será entrega como objeto al front
     * */
    public String generateToken(Authentication auth) {
        MainUsuario mainUser = (MainUsuario) auth.getPrincipal();
        Map<String, Object> claims = new HashMap<>();
        /**
         * claims, es una variable para generar nueva información de acuerdo a lo que
         * yo necesite entregarle al front
         * */
        claims.put("lastName",mainUser.getApellido());
        claims.put("name",mainUser.getNombre());
        return Jwts.builder()
                .setSubject(mainUser.getUsername())
                .addClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 1000))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    /**
     * Metodo que obtiene el usuario configurado en el token
     * */
    public String getUserNameFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    /**
     * Metodo que valida si el token esta correctamente armado y si aun cuenta con tiempo y no ha expirado
     * */
    @SneakyThrows
    public boolean validateToken(String token) {
        Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
        return true;
    }

}