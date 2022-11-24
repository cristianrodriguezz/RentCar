package com.example.PI.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "ciudades")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String pais;
        private String nombre;
        @OneToMany(mappedBy = "ciudad", fetch = FetchType.LAZY)
        @JsonIgnore
        private Set<Producto> productos ;
}
