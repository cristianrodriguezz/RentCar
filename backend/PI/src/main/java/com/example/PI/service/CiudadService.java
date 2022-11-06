package com.example.PI.service;

import com.example.PI.entities.Caracteristica;
import com.example.PI.entities.Ciudad;
import com.example.PI.exceptions.BadRequestException;
import com.example.PI.exceptions.ResourceNotFoundException;
import com.example.PI.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.ReadOnlyFileSystemException;
import java.util.List;
import java.util.Optional;

@Service
public class CiudadService {
@Autowired
    CiudadRepository ciudadRepository;

public Ciudad guardarCiudad(Ciudad ciudad)throws BadRequestException {
    Optional<Ciudad> ciudadXNombre = ciudadRepository.findCiudadByNombre(ciudad.getNombre());
    if(ciudadXNombre.isPresent()){
        throw new BadRequestException("Ya existe una ciudad con el nombre" + ciudad.getNombre());
    }else{
        return ciudadRepository.save(ciudad);
    }
}
public Ciudad actualizarCiudad(Ciudad ciudad)throws Exception{
    Optional<Ciudad> ciudadBuscada = ciudadRepository.findById(ciudad.getId());
    if(ciudadBuscada.isPresent()){
       Ciudad ciudadActualizada = guardarCiudad(ciudad);
        return ciudadActualizada;
    }else{
        throw new ResourceNotFoundException("no existe la ciudad");
    }
}
    public List<Ciudad> buscarTodas()throws Exception {
        List<Ciudad> ciudadList = ciudadRepository.findAll();
        if (ciudadList.size() > 0){
            return ciudadList;
        }else{
            throw new ResourceNotFoundException("No hay ciudades");
        }
    }
    public Optional<Ciudad> buscarxId(Long id)throws Exception {
        Optional<Ciudad> ciudadBuscada = ciudadRepository.findById(id);
        if(ciudadBuscada.isPresent()){
            return ciudadBuscada;
        }
        else{
            throw new ResourceNotFoundException("No existe la ciudad con id: " + id);
        }
    }

    public String eliminarCiudad(Long id) throws Exception {
        Optional<Ciudad> ciudadAEliminar = buscarxId(id);
        ciudadAEliminar.isPresent();
        ciudadRepository.deleteById(id);
        return "Se eliminó con éxito la ciudad con id: " + id;
    }
}
