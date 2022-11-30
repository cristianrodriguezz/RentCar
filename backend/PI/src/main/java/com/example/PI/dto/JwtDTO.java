package com.example.PI.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtDTO {

    private String token;
    private String bearer;
    private Long user_Id;
    private String username;
    private String ciudad;
    private String nombre;
    private String apellido;
    private Collection<? extends GrantedAuthority> authorities;

}
