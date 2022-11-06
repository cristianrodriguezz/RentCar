package com.example.PI.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "productos")
@Getter
@Setter
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Double precio;
    private String descripcion;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Categoria categoria;
    @JoinTable(name = "productos_x_caracteristicas",
    joinColumns = @JoinColumn(name = "FK_Producto", nullable = false),
    inverseJoinColumns = @JoinColumn(name = "FK_Caracteristica", nullable = false))
    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Set<Caracteristica> caracteristicas;
    @JoinTable(name = "productos_x_ciudades",
            joinColumns = @JoinColumn(name = "FK_Producto", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "FK_Ciudad", nullable = false))
    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Set<Ciudad> ciudades;

    // relacion con tabla 'Imagen' (1 a N)
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "producto_id", referencedColumnName = "id")
    private Set<Imagen> imagenes;}

