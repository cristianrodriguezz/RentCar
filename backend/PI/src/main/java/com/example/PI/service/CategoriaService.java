package com.example.PI.service;

import com.example.PI.entities.Categoria;
import com.example.PI.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService {
    @Autowired
    CategoriaRepository categoriaRepository;

    public Categoria guardarCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }
}
