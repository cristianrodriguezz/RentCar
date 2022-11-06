package com.example.PI.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
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
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "ciudades")
    @JsonIgnore
    private Set<Producto> productos;

    public void addProducto(Producto producto) {
        if(this.productos == null){
            this.productos = new HashSet<>();
        }

        this.productos.add(producto);
    }

}
