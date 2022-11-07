package com.example.PI.service;

import com.example.PI.entities.Caracteristica;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.CaracteristicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicaService {
    @Autowired
    CaracteristicaRepository caracteristicaRepository;
    public Caracteristica guardarCaracteristica(Caracteristica caracteristica) throws BadRequestException {
        Optional<Caracteristica> caracteristicaXNombre = caracteristicaRepository.findCaracteristicaByNombre(caracteristica.getNombre());
        if (caracteristicaXNombre.isPresent()){
            throw new BadRequestException("Ya existe una caracteristica con el nombre: " + caracteristica.getNombre());
        }else {
            return caracteristicaRepository.save(caracteristica);
        }
    }

    public List<Caracteristica> buscarTodas()throws Exception {
    List<Caracteristica> caracteristicasList = caracteristicaRepository.findAll();
    if (caracteristicasList.size() > 0){
        return caracteristicasList;
    }else{
        throw new ResourceNotFoundException("No hay caracteristicas");
    }
    }
    public Optional<Caracteristica> buscarxId(Long id)throws Exception {
        Optional<Caracteristica> caracteristicaBuscada = caracteristicaRepository.findById(id);
        if(caracteristicaBuscada.isPresent()){
            return caracteristicaBuscada;
        }
        else{
            throw new ResourceNotFoundException("No existe la caracteristica con id: " + id);
        }
    }
    public String eliminarCaracteristica(Long id) throws Exception {
        Optional<Caracteristica> caracteristicaAEliminar = buscarxId(id);
        caracteristicaAEliminar.isPresent();
        caracteristicaRepository.deleteById(id);
        return "Se eliminó con éxito la caracteristica con id: " + id;
    }

    public Caracteristica actualizarCaracteristica(Caracteristica caracteristica)throws Exception{
        Optional<Caracteristica> caracteristicaBuscada = caracteristicaRepository.findById(caracteristica.getId());
        if(caracteristicaBuscada.isPresent()){
            Caracteristica caracteristicaActualizada = guardarCaracteristica(caracteristica);
            return caracteristicaActualizada;
        }else{
            throw new ResourceNotFoundException("Caracteristica con id: " + caracteristica.getId() + " no existe");
        }
    }
}
