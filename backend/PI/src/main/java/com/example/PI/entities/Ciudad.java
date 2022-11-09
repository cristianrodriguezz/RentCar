package com.example.PI.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "ciudades")
@Getter
@Setter
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String pais;
        private String nombre;
        @ManyToMany(mappedBy = "ciudades", fetch = FetchType.LAZY)
        @JsonIgnore
        private Set<Producto> productos ;
}
