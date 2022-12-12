package com.example.PI.dto;

import com.example.PI.entities.Imagen;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;

@Getter
@Setter
public class ReservaDTO {
    private Long id;
    private LocalTime horaComienzoDeReserva;
    private LocalDate fechaInicioReserva;
    private LocalDate fechaFinalReserva;
    private Long user_id;
    private Long producto_id;
    @JsonIgnore
    private Set<Imagen> urlImagen;
    private String nombreProducto;

}
